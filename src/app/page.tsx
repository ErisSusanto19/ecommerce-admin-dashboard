"use client"

import { SalesChart } from "@/components/SalesChart";
import { StatCard } from "@/components/StatCard";
import { formatCurrency } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { DollarSign, ShoppingCart, Users } from "lucide-react";

interface AnalyticsData {
  totalRevenueInCents: number;
  totalOrders: number;
  activeCustomers: number;
  monthlySales: { month: string, totalSales: number }[];
}

const fetchAnalytics = async(): Promise<AnalyticsData> => {
  const res = await fetch(`/api/analytics`)
  if(!res.ok){
    throw new Error("Network response was not ok");
  }

  return res.json();
}

export default function Home() {
  const { data, isLoading, isError, error } = useQuery<AnalyticsData>({
    queryKey: ['analytics'],
    queryFn: fetchAnalytics
  });

  if(isLoading){
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Loading dashboard...</p>
      </div>
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

          <div className="mt-8">
            <SalesChart data={data?.monthlySales}/>
          </div>

        </div>
      </div>
    </main>
  );
}
