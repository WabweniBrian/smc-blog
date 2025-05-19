import { Toaster } from "@/components/ui/toaster";
import { Outfit } from "next/font/google";
import BackToTopButton from "@/components/back-button";

import NextTopLoader from "nextjs-toploader";
import type React from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});
export const metadata = {
  title: "Secure Motorcycle Companion Blog",
  description: "Blog for the Secure Motorcycle Companion Final Year Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {/* Next.js Top Loader */}
        <NextTopLoader color={"#3971ED"} zIndex={9999} />
        {children}
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
