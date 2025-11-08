import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SkeletonItemRow = () => {
    return (
        <TableRow>
            <TableCell>
                <Skeleton className="h-5 w-40" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-5 w-10" />
            </TableCell>
            <TableCell className="text-right">
                <Skeleton className="h-5 w-24 ml-auto" />
            </TableCell>
            <TableCell className="text-right">
                <Skeleton className="h-5 w-24 ml-auto" />
            </TableCell>
        </TableRow>
    )
}

export const OrderDetailsPageSkeleton = () => {
  return (
    <main className="p-8">
        {/* 1. Skeleton untuk Header (Tombol Kembali dan Judul) */}
        <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-10 w-10" /> {/* Tombol Kembali */}
            <Skeleton className="h-8 w-64" /> {/* Judul */}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
            {/* 2. Skeleton Kolom Kiri (Daftar Item) */}
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
                            {/* Tampilkan 3 baris skeleton */}
                            <SkeletonItemRow />
                            <SkeletonItemRow />
                            <SkeletonItemRow />
                        </TableBody>
                    </CardContent>
                </Card>
            </div>
            
            {/* 3. Skeleton Kolom Kanan (Ringkasan & Pelanggan) */}
            <div className="space-y-6">
                {/* Skeleton Card Ringkasan */}
                <Card>
                    <CardHeader>
                        <CardTitle>Ringkasan Pesanan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-40" />
                        </div>
                        <div className="flex justify-between items-center">
                            <Skeleton className="h-5 w-16" />
                            <Skeleton className="h-10 w-[180px]" /> {/* Placeholder Select Dropdown */}
                        </div>
                        <div className="flex justify-between">
                            <Skeleton className="h-5 w-16" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                        <div className="flex justify-between">
                            <Skeleton className="h-6 w-12" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </CardContent>
                </Card>

                {/* Skeleton Card Pelanggan */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Pelanggan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Skeleton className="h-5 w-40" /> {/* Nama */}
                        <Skeleton className="h-4 w-48" /> {/* Email */}
                    </CardContent>
                </Card>
            </div>
        </div>
    </main>
  );
};