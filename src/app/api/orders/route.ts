import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const ORDERS_PER_PAGE = 10;

export const GET = async(request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');

    try {
        const skip = (page - 1) * ORDERS_PER_PAGE;
        const totalOrders = await prisma.order.count();

        const orders = await prisma.order.findMany({
            skip: skip,
            take: ORDERS_PER_PAGE,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                customer: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })

        const totalPages = Math.ceil(totalOrders / ORDERS_PER_PAGE)

        return NextResponse.json({
            orders,
            currentPage: page,
            totalPages
        })
    } catch (error) {
        console.error("Failed to fetch orders: ", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    } finally {
        await prisma.$disconnect();
    }
}