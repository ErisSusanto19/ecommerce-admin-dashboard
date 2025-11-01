import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./providers/QueryProvider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "E-commerce admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <header className="bg-white border-b">
            <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/orders" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Pesanan
              </Link>
            </nav>
          </header>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
