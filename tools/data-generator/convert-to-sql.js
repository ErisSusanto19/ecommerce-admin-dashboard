// convert-to-sql.js (DENGAN LOGIKA YANG DIPERBAIKI)
const fs = require('fs');
const path = require('path');

console.log('Converting JSON to a complete and robust SQL seeding script...');

function escapeSql(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "''");
}

const jsonPath = path.join(__dirname, 'mock-data.json');
const rawData = fs.readFileSync(jsonPath);
const data = JSON.parse(rawData);

const sqlCommands = [];

sqlCommands.push('-- Langkah 1: Membersihkan semua data lama dari tabel');
sqlCommands.push('TRUNCATE TABLE public.order_items, public.orders, public.customers, public.products RESTART IDENTITY CASCADE;');

sqlCommands.push('\n-- Langkah 2: Memasukkan data Customers');
data.customers.forEach(customer => {
  const name = escapeSql(customer.name);
  const email = escapeSql(customer.email);
  const avatarUrl = escapeSql(customer.avatarUrl);
  sqlCommands.push(`INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('${name}', '${email}', '${avatarUrl}');`);
});
console.log(`- Menyiapkan ${data.customers.length} perintah INSERT untuk Customers.`);

sqlCommands.push('\n-- Langkah 3: Memasukkan data Products');
data.products.forEach(product => {
  const name = escapeSql(product.name);
  const description = escapeSql(product.description);
  const priceInCents = product.priceInCents;
  const imageUrl = escapeSql(product.imageUrl);
  sqlCommands.push(`INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('${name}', '${description}', ${priceInCents}, '${imageUrl}');`);
});
console.log(`- Menyiapkan ${data.products.length} perintah INSERT untuk Products.`);

sqlCommands.push(`
\n-- Langkah 4: Membuat data Orders dan OrderItems secara acak dengan logika yang benar
DO $$
DECLARE
    i INT;
    random_customer_id UUID;
    order_id_var UUID;
    num_items INT;
    total_cents INT;
    order_created_at TIMESTAMP;
    -- Variabel untuk menampung satu baris produk (termasuk id dan harga)
    product_record RECORD;
BEGIN
    FOR i IN 1..250 LOOP
        SELECT id INTO random_customer_id FROM public.customers ORDER BY random() LIMIT 1;
        
        order_created_at := NOW() - (random() * interval '365 days');

        INSERT INTO public.orders ("totalInCents", status, "customerId", "createdAt")
        VALUES (0, (ARRAY['PENDING', 'PROCESSING', 'DELIVERED', 'CANCELLED'])[floor(random() * 4) + 1]::"OrderStatus", random_customer_id, order_created_at)
        RETURNING id INTO order_id_var;
        
        num_items := floor(random() * 5) + 1;
        total_cents := 0;
        
        -- PERBAIKAN LOGIKA:
        -- Dapatkan BEBERAPA produk unik SEKALIGUS, dan loop melalui hasil tersebut.
        -- Ini menjamin tidak akan ada produk duplikat dalam satu pesanan.
        FOR product_record IN 
            SELECT id, "priceInCents" FROM public.products ORDER BY random() LIMIT num_items
        LOOP
            INSERT INTO public.order_items (quantity, "priceInCents", "orderId", "productId")
            VALUES (1, product_record."priceInCents", order_id_var, product_record.id);
            
            total_cents := total_cents + product_record."priceInCents";
        END LOOP;
        
        UPDATE public.orders SET "totalInCents" = total_cents WHERE id = order_id_var;
        
    END LOOP;
END $$;
`);
console.log('- Menyiapkan blok SQL yang benar secara logis untuk membuat 250 Orders.');

const finalSqlScript = sqlCommands.join('\n');
const outputPath = path.join(__dirname, 'output.sql');
fs.writeFileSync(outputPath, finalSqlScript);

console.log(`\nBerhasil! Skrip SQL yang benar telah disimpan di: ${outputPath}`);