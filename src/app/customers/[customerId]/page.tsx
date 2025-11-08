"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useImageFallback } from "@/lib/hooks";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

interface Order {
    id: string;
    status: string;
    createdAt: string;
    totalInCents: number;
}

interface CustomerDetails {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
    createdAt: string;
    orders: Order[];
}

const fetchCustomerDetails = async(customerId: string) => {
    const res = await fetch(`/api/customers/${customerId}`)
    if(!res.ok){
        throw new Error("Failed to fetch customer detail")
    }

    return res.json();
}

const CustomerDetailsPage = () => {
    const params = useParams();
    const router = useRouter();
    const customerId = params.customerId as string;

    const {data: customer, isLoading, isError, error} = useQuery<CustomerDetails>({
        queryKey: ["customer", customerId],
        queryFn: () => fetchCustomerDetails(customerId),
        enabled: !!customerId
    })

    const imageProps = useImageFallback(customer?.avatarUrl, "/user.png")

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

    if(isError) return <div className="p-8">Error: {error.message}</div>
    if(!customer) return <div className="-8">Customer not found.</div>

    const totalSpent = customer.orders.reduce((sum, order) => sum + order.totalInCents, 0)

    return (
        <main className="p-8">
            <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Kembali</span>
                </Button>
                <h1 className="text-3xl font-bold">Detail Pelanggan</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

                <div className="md:col-span-1 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center space-x-4">
                            <Image
                                {...imageProps}
                                alt={customer.name}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <CardTitle>{customer.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{customer.email}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span>Bergabung: </span>
                                <span>{formatDate(customer.createdAt)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Pesanan: </span>
                                <span>{customer.orders.length}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total Belanja: </span>
                                <span>{formatCurrency(totalSpent)}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Riwayat Pesanana</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>ID Pesanan</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {customer.orders.map(order => (
                                        <TableRow
                                            key={order.id}
                                            onClick={() => router.push(`/orders/${order.id}`)}
                                            className="cursor-pointer hover:bg-muted/50"
                                        >
                                            <TableCell className="text-sx font-mono">{order.id}</TableCell>
                                            <TableCell>
                                                <Badge variant={statusVariantMap[order.status]}>{order.status}</Badge>
                                            </TableCell>
                                            <TableCell>{formatDate(order.createdAt)}</TableCell>
                                            <TableCell className="text-right">{formatCurrency(order.totalInCents)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </main>
    )
}

export default CustomerDetailsPage;