"use client"

import { EditProductModal } from "@/components/EditProductModal";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useImageFallback } from "@/lib/hooks";
import { formatCurrency } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    priceInCents: number;
    imageUrl: string | null;
}

interface ProductsApiResponse {
    products: Product[];
    currentPage: number;
    totalPages: number;
}

const fetchProducts = async(page: number): Promise<ProductsApiResponse> => {
    const res = await fetch(`/api/products?page=${page}`)
    if(!res.ok){
        throw new Error("Failed to fetch products")
    }

    return res.json()
}

async function createProduct(data: { name: string; priceInCents: number; }) {
    const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create product");

    return res.json();
}

interface ProductRowProps {
    product: Product;
    setEditingProduct: (product: Product) => void;
}

const ProductRow = ({ product, setEditingProduct }: ProductRowProps) => {
    const imageProps = useImageFallback(product.imageUrl, '/undraw_images.svg')

    return (
        <TableRow
            key={product.id}
        >
            <TableCell>
                <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10">
                        <Image
                            {...imageProps}
                            alt={product.name}
                            fill
                            sizes="40px"
                            className="rounded-md object-cover"
                        />
                    </div>
                    <span className="font-medium">{product.name}</span>
                </div>
            </TableCell>
            <TableCell className="text-right">{formatCurrency(product.priceInCents)}</TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Buka menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setEditingProduct(product)}>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}

const ProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const {data, isLoading, isError, error} = useQuery<ProductsApiResponse>({
        queryKey: ["products", currentPage],
        queryFn: () => fetchProducts(currentPage)
    })

    if(isLoading) return <div className="p-8">Loading...</div>
    if(isError) return <div className="p-8">Error: {error.message}</div>

    return (
        <>
            <main className="p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-semibold">Produk</h1>
                    <Button onClick={() => setIsCreateModalOpen(true)}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Tambah Produk Baru
                    </Button>
                </div>

                <div className="bg-white rounded-lg border shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Produk</TableHead>
                                <TableHead className="text-right">Harga</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.products.map(product => (
                                <ProductRow 
                                    key={product.id} product={product} 
                                    setEditingProduct={setEditingProduct}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant={'outline'}
                        size={'sm'}
                        onClick={() => setCurrentPage((prev) => Math.max(prev-1, 1))}
                        disabled={currentPage == 1}
                    >
                        Sebelumnya
                    </Button>

                    <span className="text-sm">
                        Halaman {data?.currentPage} dari {data?.totalPages}
                    </span>

                    <Button
                        variant={'outline'}
                        size={'sm'}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage == data?.totalPages}
                    >
                        Selanjutnya
                    </Button>
                </div>
            </main>

            <EditProductModal
                product={editingProduct}
                isOpen={!!editingProduct || isCreateModalOpen}
                onClose={() => {
                    setEditingProduct(null);
                    setIsCreateModalOpen(false);
                }}
            />
        </>
    )
}

export default ProductsPage