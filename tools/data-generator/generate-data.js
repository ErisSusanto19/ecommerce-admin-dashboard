// generate-data.js (VERSI BARU DAN PASTI BERHASIL)
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

console.log('Generating simplified customer and product data...');

const NUM_CUSTOMERS = 50;
const NUM_PRODUCTS = 100;

const data = {
  customers: [],
  products: [],
};

// 1. Generate Customers
for (let i = 0; i < NUM_CUSTOMERS; i++) {
  data.customers.push({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
  });
}
console.log(`- Generated ${data.customers.length} customers.`);

// 2. Generate Products
for (let i = 0; i < NUM_PRODUCTS; i++) {
  data.products.push({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    priceInCents: parseInt(faker.commerce.price({ min: 1000, max: 50000, dec: 0 })),
    imageUrl: faker.image.urlLoremFlickr({ category: 'technics' }),
  });
}
console.log(`- Generated ${data.products.length} products.`);

// --- Tulis ke File ---
// '__dirname' adalah variabel global yang selalu tersedia di skrip CommonJS
const outputPath = path.join(__dirname, 'mock-data.json');
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log(`\nSuccessfully generated data and saved to: ${outputPath}`);