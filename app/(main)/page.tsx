import {
  Activity,
  AlertTriangle,
  Battery,
  HardHatIcon as Helmet,
} from "lucide-react";
import type { Metadata } from "next";

import { Overview } from "@/components/overview";
import { RecentIncidents } from "@/components/recent-incidents";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Smart Helmet Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="gradient-bg-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Helmets</CardTitle>
            <Helmet className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs opacity-80">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Helmets
            </CardTitle>
            <Activity className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs opacity-80">+15% from last week</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs opacity-80">-8% from last month</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Battery Health
            </CardTitle>
            <Battery className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs opacity-80">Average across all helmets</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 overflow-x-auto">
          <CardHeader>
            <CardTitle>Incident Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
            <CardDescription>You have 12 incidents this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentIncidents />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
