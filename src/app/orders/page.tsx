"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Order {
    id: string;
    totalInCents: number;
    status: string;
    createdAt: string;
    customer: {
        name: string;
        email: string;
    }
}

interface OrdersApiResponse {
    orders: Order[],
    currentPage: number;
    totalPages: number;
}

const fetchOrders = async(page:number, query: string): Promise<OrdersApiResponse> => {
    const res = await fetch(`/api/orders?page=${page}&query=${query}`)
    if(!res.ok){
        throw new Error("Failed to fetch orders")
    }
 
    return res.json();
}

const OrdersPage = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
            setCurrentPage(1);
        }, 500)

        return () => {
            clearTimeout(timeId)
        }
    }, [searchTerm])

    const {data, isLoading, isError, error} = useQuery<OrdersApiResponse>({
        queryKey: ['orders', currentPage, debouncedSearchTerm],
        queryFn: () => fetchOrders(currentPage, debouncedSearchTerm)
    })

    const statusVariantMap: Record<string, "success" | "warning" | "destructive" | "secondary" | "outline"> = {
        "PENDING": "warning",
        "PROCESSING": "warning",
        "DELIVERED": "success",
        "CANCELLED": "destructive",
    };

    if(isLoading){
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader size={36}/>
            </div>
        )
    }

    if(isError){
        return(
            <div className="p-8">
                Error: {error.message}
            </div>
        )
    }

    return (
        <main className="min-h-screen p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Pesanan</h1>
                <div className="w-full max-w-sm">
                    <Input
                        type="search"
                        placeholder="Cari berdasarkan nama atau email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pelanggan</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                            <TableHead className="text-right">tanggal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.orders.map(order => (
                            <TableRow 
                                key={order.id}
                                onClick={() => router.push(`/orders/${order.id}`)}
                                className="cursor-pointer hover:bg-muted/50"
                            >
                                <TableCell>
                                    <div className="font-medium">{order.customer.name}</div>
                                    <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={statusVariantMap[order.status]}>{order.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">{formatCurrency(order.totalInCents)}</TableCell>
                                <TableCell className="text-right">{formatDate(order.createdAt)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant={'outline'}
                    size={'sm'}
                    disabled={currentPage == 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev-1, 1))}
                >
                    Sebelumnya
                </Button>

                <span className="text-sm">
                    Halaman {data?.currentPage} dari {data?.totalPages}
                </span>

                <Button
                    variant={'outline'}
                    size={'sm'}
                    disabled={currentPage == data?.totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Berikutnya
                </Button>
            </div>
        </main>
    )

}

export default OrdersPage;