import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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

        return NextResponse.json({
            totalRevenueInCents: totalRevenue,
            totalOrders,
            activeCustomers
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