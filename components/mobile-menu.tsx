"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Menu className="h-8 w-8 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary ",
              { "text-primary": pathname === "/" }
            )}
          >
            Overview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/helmets"
            className={cn(
              "text-sm font-medium text-muted-foreground transition-colors hover:text-primary ",
              { "text-primary": pathname === "/helmets" }
            )}
          >
            Helmets
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/incidents"
            className={cn(
              "text-sm font-medium text-muted-foreground transition-colors hover:text-primary ",
              { "text-primary": pathname === "/incidents" }
            )}
          >
            Incidents
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/settings"
            className={cn(
              "text-sm font-medium text-muted-foreground transition-colors hover:text-primary ",
              { "text-primary": pathname === "/settings" }
            )}
          >
            Settings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
