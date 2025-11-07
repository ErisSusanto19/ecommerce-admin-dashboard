import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const PRODUCTS_PER_PAGE = 10;

export const GET = async(request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');

    try {
        const skip = (page - 1) * PRODUCTS_PER_PAGE;
        const totalProducts = await prisma.product.count();
        const products = await prisma.product.findMany({
            skip: skip,
            take: PRODUCTS_PER_PAGE,
            orderBy: { updatedAt: 'desc' }
        })

        const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE)
        
        return NextResponse.json({
            products,
            currentPage: page,
            totalPages
        })

    } catch (error) {
        console.error("Failed to fetch products: ", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async(request: NextRequest) => {
    const body = await request.json();

    const { name, priceInCents, description, imageUrl } = body;

    if (!name || typeof priceInCents !== 'number') {
        return NextResponse.json({ error: "Invalid data provided" }, { status: 400 });
    }

    try {
        const newProduct = await prisma.product.create({
            data: {
            name,
            priceInCents,
            description: description || "",
            imageUrl: imageUrl || null,
            },
        });
        return NextResponse.json(newProduct, { status: 201 });

    } catch (error) {
        console.error("Failed to create product:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

    } finally {
        await prisma.$disconnect();
    }
}