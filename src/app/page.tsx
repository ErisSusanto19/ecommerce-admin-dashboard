"use client"

import { SalesChart } from "@/components/SalesChart";
import { DashboardSkeleton } from "@/components/skeletons/DashboardSkeleton";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { AlertTriangle, DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";

interface AnalyticsData {
  totalRevenueInCents: number;
  totalOrders: number;
  activeCustomers: number;
  monthlySales: { month: string, totalSales: number }[];
  activityFeed: ActivityItem[];
}

interface ActivityItem {
    id: string;
    type: 'NEW_ORDER' | 'LOW_STOCK' | 'NEW_CUSTOMER';
    text: string;
    timestamp: string;
    link: string;
}

const fetchAnalytics = async(): Promise<AnalyticsData> => {
  const res = await fetch(`/api/analytics`)
  if(!res.ok){
    throw new Error("Network response was not ok");
  }

  return res.json();
}

const ActivityItemRow = ({ item }: { item: ActivityItem }) => {
    const icons = {
        NEW_ORDER: <Package className="h-4 w-4 text-blue-500" />,
        LOW_STOCK: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
        NEW_CUSTOMER: <Users className="h-4 w-4 text-green-500" />,
    };

    return (
        <li className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
            <div className="shrink-0 mt-1">
                {icons[item.type] || <Package className="h-4 w-4" />}
            </div>
            <div className="flex-1">
                <p className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: item.text }} />
                <time className="text-xs text-muted-foreground">
                    {new Date(item.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </time>
            </div>
            <Button asChild variant="ghost" size="sm">
                <Link href={item.link}>
                    Lihat
                </Link>
            </Button>
        </li>
    )
}

export default function Home() {
  const { data, isLoading, isError, error } = useQuery<AnalyticsData>({
    queryKey: ['analytics'],
    queryFn: fetchAnalytics
  });

  if(isLoading){
    return (
      <DashboardSkeleton/>
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
    <main className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard
                        title="Total Pendapatan"
                        value={data? formatCurrency(data.totalRevenueInCents): 'Rp 0'}
                        icon={DollarSign}
                        description="Dari pesanan yang sudah selesai"
                    />
                    <StatCard
                        title="Total Pesanan"
                        value={data? data.totalOrders.toLocaleString('id-ID'): '0'}
                        icon={ShoppingCart}
                    />
                    <StatCard
                        title="Pelanggan aktif"
                        value={data? data.activeCustomers.toLocaleString('id-ID'): '0'}
                        icon={Users}
                        description="Jumlah pelanggan yang pernah memesan"
                    />
                </div>
                
                <div className="mt-8">
                    <SalesChart data={data?.monthlySales}/>
                </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Aktivitas & Tugas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {data && data.activityFeed.length > 0 ? (
                            <ul className="space-y-4">
                                {data.activityFeed.map(item => (
                                    <ActivityItemRow key={item.id} item={item} />
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-muted-foreground text-center py-10">
                                Tidak ada tugas terbaru.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
