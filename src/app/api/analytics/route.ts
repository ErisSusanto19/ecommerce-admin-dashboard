import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

type ActivityItem = {
    id: string;
    type: 'NEW_ORDER' | 'NEW_CUSTOMER';
    text: string;
    timestamp: Date;
    link: string;
}

export const GET = async () => {
    try {
        const totalRevenueResult = await prisma.order.aggregate({
            _sum: {
                totalInCents: true
            },
            where: {
                status: 'DELIVERED'
            }
        });

        const totalRevenue = totalRevenueResult._sum.totalInCents || 0;

        const totalOrders = await prisma.order.count();

        const activeCustomers = await prisma.order.groupBy({
            by: ['customerId']
        }).then(results => results.length);

        const monthlySalesData = await prisma.$queryRaw<
            { month: string; totalSales: number }[]
        >(Prisma.sql`
            SELECT
                TO_CHAR("createdAt", 'Mon') AS month,
                EXTRACT(YEAR FROM "createdAt") AS year,
                EXTRACT(MONTH FROM "createdAt") AS month_num,
                SUM("totalInCents") AS "totalSales"
            FROM
                "orders"
            WHERE
                status = 'DELIVERED'
                AND "createdAt" >= NOW() - INTERVAL '12 months'
            GROUP BY
                year, month_num, month
            ORDER BY
                year, month_num;
        `);

        const formattedMonthlySales = monthlySalesData.map(item => ({
            ...item,
            totalSales: Number(item.totalSales),
        }));

        const recentOrders = await prisma.order.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: {
                customer: {
                    select: { name: true }
                }
            }
        });

        const recentCustomers = await prisma.customer.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' }
        });

        const orderActivities: ActivityItem[] = recentOrders.map(order => ({
            id: `order-${order.id}`,
            type: 'NEW_ORDER',
            text: `Pesanan baru <strong>${order.id.substring(0, 8)}...</strong> dari <strong>${order.customer.name}</strong>.`,
            timestamp: order.createdAt,
            link: `/orders/${order.id}`
        }));

        const customerActivities: ActivityItem[] = recentCustomers.map(customer => ({
            id: `customer-${customer.id}`,
            type: 'NEW_CUSTOMER',
            text: `Pelanggan baru <strong>${customer.name}</strong> baru saja bergabung.`,
            timestamp: customer.createdAt,
            link: `/customers/${customer.id}`
        }));

        const activityFeed = [...orderActivities, ...customerActivities]
            .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
            .slice(0, 5);

        return NextResponse.json({
            totalRevenueInCents: totalRevenue,
            totalOrders,
            activeCustomers,
            monthlySales: formattedMonthlySales,
            activityFeed
        })

    } catch (error) {
        console.log("Failed to fecth analytics data: ", error);
        return NextResponse.json(
            { error: "Internal Server Error"},
            {status: 500}
        )
    } finally {
        await prisma.$disconnect();
    }
}