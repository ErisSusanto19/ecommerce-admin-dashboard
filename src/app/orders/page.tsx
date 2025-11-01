"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

const fetchOrders = async(page:number): Promise<OrdersApiResponse> => {
    const res = await fetch(`/api/orders?page=${page}`)
    if(!res.ok){
        throw new Error("Failed to fetch orders")
    }

    return res.json();
}

const OrdersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isLoading, isError, error} = useQuery<OrdersApiResponse>({
        queryKey: ['orders', currentPage],
        queryFn: () => fetchOrders(currentPage)
    })

    if(isLoading){
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-gray-500">Loading dashboard...</p>
            </div>
        )
    }

    if(isError){
        return(
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-red-500">Error: {error.message}</p>
            </div>
        )
    }

    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-semibold mb-6">Pesanan</h1>

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
                            <TableRow key={order.id}>
                                <TableCell>
                                    <div className="font-medium">{order.customer.name}</div>
                                    <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={"outline"}>{order.status}</Badge>
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