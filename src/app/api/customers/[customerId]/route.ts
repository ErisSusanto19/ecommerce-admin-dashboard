import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async(request: NextRequest, {params}: {params: {customerId: string}}) => {
    const resolvedParams = await params;
    const { customerId } = resolvedParams;

    try {
        const customer = await prisma.customer.findUnique({
            where: {
                id: customerId
            },
            include: {
                orders: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        })

        if(!customer){
            return NextResponse.json({error: "Customer not found"}, {status: 404})
        }

        return NextResponse.json(customer)
        
    } catch (error) {
        console.error(`Failed to fetch customer ${customerId}: `, error)
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    } finally {
        await prisma.$disconnect();
    }
}