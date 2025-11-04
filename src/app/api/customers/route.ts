import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma =  new PrismaClient();
const CUSTOMERS_PER_PAGE = 10;

export const GET = async(request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const page =  parseInt(searchParams.get("page") || '1');

    try {
        const skip = (page - 1) * CUSTOMERS_PER_PAGE;
        const totalCustomers = await prisma.customer.count();

        const customers = await prisma.customer.findMany({
            skip: skip,
            take: CUSTOMERS_PER_PAGE,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                _count: {
                    select: { orders: true }
                },
                orders: {
                    where: { status: 'DELIVERED' },
                    select: {
                        totalInCents: true
                    }
                }
            }
        })

        const customersWithTotalSpent = customers.map(cus => {
            const totalSpent = cus.orders.reduce((sum, order) => sum + order.totalInCents, 0);
            return {
                id: cus.id,
                name: cus.name,
                email: cus.email,
                avatarUrl: cus.avatarUrl,
                createdAt: cus.createdAt,
                orderCount: cus._count.orders,
                totalSpent
            }
        })

        const totalPages = Math.ceil(totalCustomers / CUSTOMERS_PER_PAGE)

        return NextResponse.json({
            customers: customersWithTotalSpent,
            currentPage: page,
            totalPages
        })

    } catch (error) {
        console.error("Failed to fetch customers: ", error)
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
        
    } finally {
        await prisma.$disconnect();
    }
}