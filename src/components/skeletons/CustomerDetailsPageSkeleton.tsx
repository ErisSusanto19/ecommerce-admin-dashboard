import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SkeletonHistoryRow = () => {
    return (
        <TableRow>
            <TableCell>
                <Skeleton className="h-5 w-36" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-6 w-20 rounded-full" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-5 w-28" />
            </TableCell>
            <TableCell className="text-right">
                <Skeleton className="h-5 w-24 ml-auto" />
            </TableCell>
        </TableRow>
    )
}

export const CustomerDetailsPageSkeleton = () => {
  return (
    <main className="p-8">
        {/* 1. Skeleton untuk Header (Tombol Kembali dan Judul) */}
        <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-10 w-10" /> {/* Tombol Kembali */}
            <Skeleton className="h-8 w-64" /> {/* Judul Halaman */}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
            
            {/* 2. Skeleton Kolom Kiri (Profil Pelanggan) */}
            <div className="md:col-span-1 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-4">
                        {/* Avatar */}
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <div className="space-y-2">
                            {/* Nama */}
                            <Skeleton className="h-6 w-40" />
                            {/* Email */}
                            <Skeleton className="h-4 w-48" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                        <div className="flex justify-between">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-5 w-10" />
                        </div>
                        <div className="flex justify-between">
                            <Skeleton className="h-6 w-28" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 3. Skeleton Kolom Kanan (Riwayat Pesanan) */}
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Riwayat Pesanan</CardTitle>
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
                                <SkeletonHistoryRow />
                                <SkeletonHistoryRow />
                                <SkeletonHistoryRow />
                                <SkeletonHistoryRow />
                                <SkeletonHistoryRow />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

        </div>
    </main>
  );
};