import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
    title: string;
    value: ReactNode;
    icon: LucideIcon;
    description?: string;
}

export const StatCard = ({ title, value, icon: Icon, description}: StatCardProps) => {
    return (
        <div className="bg-white p-6 shadow-sm rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-500">{title}</h3>
                <Icon className="h-5 w-5 text-gray-400"/>
            </div>
            <div className="mt-2">
                <p className="text-xl font-semibold text-gray-900">
                    {value}
                </p>
                {description && (
                    <p className="mt-1 text-xs text-gray-500 ">{description}</p>
                )}
            </div>
        </div>
    )
}