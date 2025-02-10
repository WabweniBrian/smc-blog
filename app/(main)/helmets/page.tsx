import { AlertTriangle, Battery, HardHatIcon, Wifi } from "lucide-react";
import type { Metadata } from "next";

import { HelmetGrid } from "@/components/helmet-grid";
import { HelmetMap } from "@/components/helmet-map";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Helmets",
  description: "Manage and monitor your Smart Helmets",
};

export default function HelmetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Helmets</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
            Add New Helmet
          </Button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="gradient-bg-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Helmets</CardTitle>
            <HardHatIcon className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs opacity-80">5 added this month</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Helmets
            </CardTitle>
            <Wifi className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs opacity-80">93.3% of total helmets</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Battery
            </CardTitle>
            <Battery className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs opacity-80">3% higher than last week</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs opacity-80">2 critical, 1 warning</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 overflow-hidden">
          <CardHeader>
            <CardTitle>Helmet Locations</CardTitle>
            <CardDescription>
              Real-time locations of active helmets
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <HelmetMap />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Helmet Grid</CardTitle>
            <CardDescription>Quick view of all helmets</CardDescription>
          </CardHeader>
          <CardContent>
            <HelmetGrid />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
