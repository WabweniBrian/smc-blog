import { AlertCircle, AlertOctagon, Clock, Filter, Users } from "lucide-react";
import type { Metadata } from "next";

import { IncidentFilters } from "@/components/incident-filters";
import { IncidentsChart } from "@/components/incidents-chart";
import { IncidentsList } from "@/components/incidents-list";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Incidents",
  description: "Monitor and manage Smart Helmet incidents",
};

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
          Incidents
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>Export Report</Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="gradient-bg-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Incidents
            </CardTitle>
            <AlertCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs opacity-80">+12 from last month</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Clock className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs opacity-80">5 require immediate attention</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Affected Riders
            </CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs opacity-80">42% of total riders</p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Critical Alerts
            </CardTitle>
            <AlertOctagon className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs opacity-80">-3 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Incident Trends</CardTitle>
            <CardDescription>
              Number of incidents over time by severity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <IncidentsChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="space-y-0.5">
            <CardTitle>Active Filters</CardTitle>
            <CardDescription>Customize your incident view</CardDescription>
          </CardHeader>
          <CardContent>
            <IncidentFilters />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
          <CardDescription>
            A detailed list of all incidents sorted by date
          </CardDescription>
        </CardHeader>
        <CardContent>
          <IncidentsList />
        </CardContent>
      </Card>
    </div>
  );
}
