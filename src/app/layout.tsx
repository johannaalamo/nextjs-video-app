"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { trpc, trpcClient } from "@/utils/trpc";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          {children}
        </trpc.Provider>
      </body>
    </html>
  );
}