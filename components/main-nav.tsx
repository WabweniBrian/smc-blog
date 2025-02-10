"use client";

import Link from "next/link";
import { HardHatIcon as Helmet } from "lucide-react";
import type React from "react"; // Added import for React

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 md:space-x-6", className)}
      {...props}
    >
      <Link href="/" className={"flex items-center space-x-2 "}>
        <Helmet className="h-6 w-6" />
        <span className="font-bold text-xl hidden sm:block">SMC</span>
      </Link>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden md:block",
          { "text-primary": pathname === "/" }
        )}
      >
        Overview
      </Link>
      <Link
        href="/helmets"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:block",
          { "text-primary": pathname === "/helmets" }
        )}
      >
        Helmets
      </Link>
      <Link
        href="/incidents"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:block",
          { "text-primary": pathname === "/incidents" }
        )}
      >
        Incidents
      </Link>
      <Link
        href="/settings"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:block",
          { "text-primary": pathname === "/settings" }
        )}
      >
        Settings
      </Link>
    </nav>
  );
}
