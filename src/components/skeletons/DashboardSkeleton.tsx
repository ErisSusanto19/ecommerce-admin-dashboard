import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkeletonStatCard = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* Skeleton untuk Judul Kartu */}
                <Skeleton className="h-4 w-36" />
                {/* Skeleton untuk Ikon */}
                <Skeleton className="h-6 w-6" />
            </CardHeader>
            <CardContent>
                {/* Skeleton untuk Nilai Utama*/}
                <Skeleton className="h-8 w-28 mt-1" />
                {/* Skeleton untuk Deskripsi */}
                <Skeleton className="h-4 w-48 mt-2" />
            </CardContent>
        </Card>
    )
}

export const DashboardSkeleton = () => {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
            {/* 1. Skeleton untuk Judul Halaman */}
            <Skeleton className="h-8 w-48 mb-6" />
            
            {/* 2. Skeleton untuk Grid Kartu Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkeletonStatCard />
                <SkeletonStatCard />
                <SkeletonStatCard />
            </div>

            {/* 3. Skeleton untuk Grafik Penjualan */}
            <div className="mt-8">
                <Card>
                    <CardContent className="p-4 md:p-6">
                        {/* Placeholder besar untuk grafik */}
                        <Skeleton className="h-80 w-full" /> 
                    </CardContent>
                </Card>
            </div>

        </div>
    </main>
  );
};