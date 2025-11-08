"use client"

import { OrderDetailsPageSkeleton } from "@/components/skeletons/OrderDetailsPageSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface Product {
    name: string;
    imageUrl: string | null;
}

interface OrderItem {
    id: string;
    quantity: number;
    priceInCents: number;
    product: Product
}

interface Customer {
    name: string;
    email: string;
}

interface OrderDetails {
    id: string;
    status: string;
    totalInCents: number;
    createdAt: string;
    customer: Customer;
    orderItems: OrderItem[]
}

const fetchOrderDetail = async (orderId: string): Promise<OrderDetails> => {
    const res = await fetch(`/api/orders/${orderId}`);
    console.log(res);
    
    if(!res.ok){
        throw new Error("Failed to fetch order details");
    }

    return res.json();
}

const updateOrderStatus = async({orderId, status}: {orderId: string, status: string}) => {
    const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status})
    })

    if(!res.ok){
        throw new Error("Failed to update status");
    }

    return res.json();
}

const OrderDetailsPage = () => {
    const params = useParams()
    const router = useRouter()
    const orderId = params.orderId as string;
    const queryClient = useQueryClient()

    const {data: order, isLoading, isError, error} = useQuery<OrderDetails>({
        queryKey: ["order", orderId],
        queryFn: () => fetchOrderDetail(orderId),
        enabled: !!orderId
    })

    const updateStatusMutation = useMutation({
        mutationFn: updateOrderStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["order", orderId]});
            queryClient.invalidateQueries({queryKey: ["order"]});
        }
    })

    const handleStatusChange = (newStatus: string) => {
        updateStatusMutation.mutate({orderId, status: newStatus})
    }

    if(isLoading){
        return (
            <OrderDetailsPageSkeleton/>
        )
    }
    
    if(isError) return <div className="p-8">Error: {error.message}</div>
    if(!order) return <div className="p-8">Order not found.</div>

    return (
        <main className="p-8">
            <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Kembali</span>
                </Button>
                <h1 className="text-3xl font-bold">Detail Pesanan</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Item Pesanan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Produk</TableHead>
                                    <TableHead>Jumlah</TableHead>
                                    <TableHead className="text-right">Harga Satuan</TableHead>
                                    <TableHead className="text-right">Subtotal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {order.orderItems.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.product.name}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell className="text-right">{formatCurrency(item.priceInCents)}</TableCell>
                                        <TableCell className="text-right">{formatCurrency(item.priceInCents * item.quantity)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ringkasan Pesanan</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between"><span>ID Pesanan:</span> <span className="font-mono text-sm">{order.id}</span></div>
                            <div className="flex justify-between items-center">
                                <span>Status:</span>
                                {/* <Badge variant="outline">{order.status}</Badge> */}
                                <Select
                                    value={order.status}
                                    onValueChange={handleStatusChange}
                                    disabled={updateStatusMutation.isPending}
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Ubah status"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="PENDING">Pending</SelectItem>
                                        <SelectItem value="PROCESSING">Processing</SelectItem>
                                        <SelectItem value="DELIVERED">Delivered</SelectItem>
                                        <SelectItem value="CANCELLED">Cancelled</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-between"><span>Tanggal:</span> <span>{formatDate(order.createdAt)}</span></div>
                            <div className="flex justify-between font-semibold text-lg"><span>Total:</span> <span>{formatCurrency(order.totalInCents)}</span></div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Pelanggan</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="font-medium">{order.customer.name}</div>
                            <div className="text-sm text-gray-500">{order.customer.email}</div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </main>
    )
}

export default OrderDetailsPage;