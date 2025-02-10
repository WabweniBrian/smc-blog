import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Secure Motorcycle Companion Dashboard",
  description: "Dashboard for the Secure Motorcycle Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Next.js Top Loader */}
        <NextTopLoader color={"#3971ED"} zIndex={9999} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
