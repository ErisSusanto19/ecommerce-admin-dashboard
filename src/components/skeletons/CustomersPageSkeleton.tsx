import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SkeletonCustomerRow = () => {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center space-x-3">
                    {/* Skeleton untuk Avatar */}
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div>
                        {/* Skeleton untuk Nama dan Email */}
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-48 mt-2" />
                    </div>
                </div>
            </TableCell>
            <TableCell>
                {/* Skeleton untuk Tanggal Bergabung */}
                <Skeleton className="h-5 w-28" />
            </TableCell>
            <TableCell className="text-center">
                {/* Skeleton untuk Total Pesanan */}
                <Skeleton className="h-5 w-12 mx-auto" />
            </TableCell>
            <TableCell className="text-right">
                {/* Skeleton untuk Total Belanja */}
                <Skeleton className="h-5 w-24 ml-auto" />
            </TableCell>
        </TableRow>
    )
}

export const CustomersPageSkeleton = () => {
  return (
    <main className="p-8">
        {/* 1. Skeleton untuk Judul Halaman */}
        <Skeleton className="h-8 w-40 mb-6" />

        {/* 2. Skeleton untuk Tabel */}
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
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonCustomerRow key={i} />
                    ))}
                </TableBody>
            </Table>
        </div>
        
        {/* 3. Skeleton untuk Paginasi */}
        <div className="flex items-center justify-end space-x-2 py-4">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-9 w-24" />
        </div>

    </main>
  );
};