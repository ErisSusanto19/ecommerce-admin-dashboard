import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

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

        return NextResponse.json({
            totalRevenueInCents: totalRevenue,
            totalOrders,
            activeCustomers,
            monthlySales: formattedMonthlySales
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