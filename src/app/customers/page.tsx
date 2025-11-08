"use client"

import { CustomersPageSkeleton } from "@/components/skeletons/CustomersPageSkeleton";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useImageFallback } from "@/lib/hooks";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Customer {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
    createdAt: string;
    orderCount: number;
    totalSpent: number;
}

interface CustomersApiResponse {
    customers: Customer[];
    currentPage: number;
    totalPages: number;
}

const fetchCustomers = async(page: number): Promise<CustomersApiResponse> => {
    const res = await fetch(`/api/customers?page=${page}`)
    if(!res.ok){
        throw new Error("Failed to fetch customers")
    }
    return res.json();
}

const CustomerRow = ({ customer }: { customer: Customer }) => {
    const router = useRouter()
    const imageProps = useImageFallback(customer.avatarUrl, '/user.png');

    return (
        <TableRow 
            key={customer.id} 
            onClick={() => router.push(`/customers/${customer.id}`)}
            className="cursor-pointer hover:bg-muted/50"
        >
            <TableCell>
                <div className="flex items-center space-x-3">
                    <Image
                        {...imageProps}
                        alt={customer.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-muted-foreground">
                            {customer.email}
                        </div>
                    </div>
                </div>
            </TableCell>
            <TableCell>{formatDate(customer.createdAt)}</TableCell>
            <TableCell className="text-center">{customer.orderCount}</TableCell>
            <TableCell className="text-right">{formatCurrency(customer.totalSpent)}</TableCell>
        </TableRow>
    );
}

const CustomersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery<CustomersApiResponse>({
        queryKey: ["customers", currentPage],
        queryFn: () => fetchCustomers(currentPage)
    })

    if(isLoading){
        return (
            <CustomersPageSkeleton/>
        )
    }
    
    if(isError) return <div className="p-8">Error: {error.message}</div>

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Pelanggan</h1>

            <div className="bg-white rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pelanggan</TableHead>
                            <TableHead>Tanggal Bergabung</TableHead>
                            <TableHead className="text-center">Total Pesanan</TableHead>
                            <TableHead className="text-right">Total Belanja</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.customers.map(cus => (
                            <CustomerRow key={cus.id} customer={cus}/>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Sebelumnya
                </Button>

                <span className="text-sm">
                    Halaman {data?.currentPage} dari {data?.totalPages}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === data?.totalPages}
                >
                    Berikutnya
                </Button>
            </div>

        </main>
    )
}

export default CustomersPage;