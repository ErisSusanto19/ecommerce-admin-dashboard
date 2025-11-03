import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient;

export const GET = async(request: NextRequest, {params}: {params: {orderId: string}}) => {
    const resolvedParams = await params;
    const { orderId } = resolvedParams;
    
    try {
        const order = await prisma.order.findUnique({
            where: {
                id: orderId
            },
            include: {
                customer: true,
                orderItems: {
                    include: {
                        product: true
                    }
                }
            }
        })

        if(!order){
            return NextResponse.json({error: "Order not found"}, {status: 404});
        }

        return NextResponse.json(order);
    } catch (error) {
        console.error(`Failed to fetch order ${orderId}`, error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );
        
    } finally {
        await prisma.$disconnect();
    }
}