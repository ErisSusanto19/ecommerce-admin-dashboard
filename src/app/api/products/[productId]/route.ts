import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PATCH = async(request: NextRequest, {params}: { params: { productId: string } })  => {
    const resolvedParams =  await params;
    const { productId } = resolvedParams;
    const body = await request.json();
    const { name, priceInCents } = body;

    if (!name || typeof priceInCents !== 'number') {
        return NextResponse.json(
            { error: "Invalid data provided. 'name' and 'priceInCents' are required." },
            { status: 400 }
        );
    }

    try {
        const updatedProduct = await prisma.product.update({
            where: { id: productId },
            data: {
                name,
                priceInCents,
            },
        });
        return NextResponse.json(updatedProduct);

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        
        console.error(`Failed to update product ${productId}:`, error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export const DELETE = async(request: NextRequest, { params }: { params: { productId: string } }) => {
    const resolvedParams = await params
    const { productId } = resolvedParams;

    try {
        await prisma.product.delete({
          where: { id: productId },
        });
        return new NextResponse(null, { status: 204 });

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
          return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        console.error(`Failed to delete product ${productId}:`, error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

    } finally {
        await prisma.$disconnect();
    }
}