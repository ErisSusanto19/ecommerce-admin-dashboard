// import { PrismaClient } from '@prisma/client';
// import * as Prisma from '@prisma/client';
import { PrismaClient, OrderStatus } from '../src/generated/prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
// const OrderStatus = Prisma.OrderStatus;

const getRandom = <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const main = async() => {
    console.log("Seeding database...");

    /**Clean up */
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.product.deleteMany();

    const customers = [];
    for (let i = 0; i < 50; i++) {
        const customer = await prisma.customer.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                avatarUrl: faker.image.avatar()
            }
        })
        customers.push(customer);
    }
    console.log(`Created ${customers.length} customers.`);
    
    const products = [];
    for (let i = 0; i < 100; i++) {
        const product = await prisma.product.create({
            data: {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                priceInCents: parseInt(faker.commerce.price({ min: 1000, max: 100000, dec: 0})),
                imageUrl: faker.image.urlLoremFlickr({ category: 'technics'})
            }
        });
        products.push(product);
    }
    console.log(`Created ${products.length} products.`);
    
    // const orderStatuses = ['PENDING', 'PROCESSING', 'DELIVERED', 'CANCELLED'];
    const orderStatuses = Object.values(OrderStatus);
    const orders = [];
    for (let i = 0; i < 250; i++) {
        const customer = getRandom(customers);
        const orderProducts = faker.helpers.arrayElements(products, {min: 1, max: 5})

        const totalInCents = orderProducts.reduce((sum, product) => sum + product.priceInCents, 0)

        const order = await prisma.order.create({
            data: {
                customerId: customer.id,
                totalInCents: totalInCents,
                status: getRandom(orderStatuses),
                createdAt: faker.date.past({years: 1}),
                orderItems: {
                    create: orderProducts.map(product => ({
                        productId: product.id,
                        quantity: 1,
                        priceInCents: product.priceInCents
                    }))
                }
            }
        })
        orders.push(order);
    }
    console.log(`Created ${orders.length} orders.`);
    
    console.log("Seeding complete!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    })

