"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SalesData {
    month: string;
    totalSales: number;
}

interface SalesChartProps {
    data?: SalesData[]
}

const formatNumber = (num: number) => {
    if(num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'jt'
    }
    if(num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'rb'
    }

    return num.toString()
}

export const SalesChart = ({ data }: SalesChartProps ) => {
    return (
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Penjualan 12 bulan terakhir</h3>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarChart data={data}>
                    <XAxis
                        dataKey="month"
                        stroke="#888888"
                        fontSize={12}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `Rp ${formatNumber(value as number)}`}
                    />
                    <Tooltip
                        cursor={{fill: '#f3f4f6'}}
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem'
                        }}
                        formatter={
                            (value) => [
                                new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0}).format(value as number), 
                                'Total Penjualan'

                            ]
                        }
                    />
                    <Bar dataKey={'totalSales'} fill="#3b82f6" radius={[4,4,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}