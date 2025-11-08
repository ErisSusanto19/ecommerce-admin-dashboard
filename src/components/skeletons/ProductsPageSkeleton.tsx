import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SkeletonProductRow = () => {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center space-x-3">
                    {/* Skeleton untuk Gambar Produk (kotak, bukan bulat) */}
                    <Skeleton className="h-10 w-10 rounded-md" />
                    {/* Skeleton untuk Nama Produk */}
                    <Skeleton className="h-5 w-48" />
                </div>
            </TableCell>
            <TableCell className="text-right">
                {/* Skeleton untuk Harga */}
                <Skeleton className="h-5 w-24 ml-auto" />
            </TableCell>
            <TableCell className="text-right">
                {/* Skeleton untuk Tombol Aksi 'MoreHorizontal' */}
                <Skeleton className="h-8 w-8 ml-auto" />
            </TableCell>
        </TableRow>
    )
}

export const ProductsPageSkeleton = () => {
  return (
    <main className="p-8">
        {/* 1. Skeleton untuk Header Halaman (Judul & Tombol Tambah) */}
        <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-8 w-40" /> {/* Judul 'Produk' */}
            <Skeleton className="h-10 w-44" /> {/* Tombol 'Tambah Produk Baru' */}
        </div>

        {/* 2. Skeleton untuk Tabel */}
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
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonProductRow key={i} />
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