import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SkeletonTableRow = () => {
    return (
        <TableRow>
            <TableCell>
                {/* Skeleton untuk Nama dan Email Pelanggan */}
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-48 mt-2" />
            </TableCell>
            <TableCell>
                {/* Skeleton untuk Badge Status */}
                <Skeleton className="h-6 w-20 rounded-full" />
            </TableCell>
            <TableCell className="text-right">
                {/* Skeleton untuk Total Harga */}
                <Skeleton className="h-5 w-24 ml-auto" />
            </TableCell>
            <TableCell className="text-right">
                {/* Skeleton untuk Tanggal */}
                <Skeleton className="h-5 w-28 ml-auto" />
            </TableCell>
        </TableRow>
    )
}

export const OrdersPageSkeleton = () => {
  return (
    <main className="min-h-screen p-8">
        {/* 1. Skeleton untuk Header (Judul dan Input Pencarian) */}
        <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-10 w-full max-w-sm" />
        </div>

        {/* 2. Skeleton untuk Tabel */}
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
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonTableRow key={i} />
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