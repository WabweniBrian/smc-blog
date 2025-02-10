"use client"

import { HardHatIcon, Battery, Thermometer, Wifi, AlertTriangle, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const helmets = [
  {
    id: 1,
    battery: 90,
    temperature: 25,
    status: "active",
    lastActive: "2 min ago",
    location: "Kampala Road",
    rider: "John D.",
    signal: "Excellent",
  },
  {
    id: 2,
    battery: 20,
    temperature: 30,
    status: "warning",
    lastActive: "5 min ago",
    location: "Nasser Road",
    rider: "Mike R.",
    signal: "Poor",
  },
  {
    id: 3,
    battery: 70,
    temperature: 28,
    status: "active",
    lastActive: "1 min ago",
    location: "Parliament Ave",
    rider: "Sarah K.",
    signal: "Good",
  },
  {
    id: 4,
    battery: 15,
    temperature: 35,
    status: "critical",
    lastActive: "15 min ago",
    location: "Jinja Road",
    rider: "David M.",
    signal: "Poor",
  },
]

function HelmetCard({ helmet }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200"
      case "warning":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "critical":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getBatteryColor = (level) => {
    if (level > 60) return "text-green-500"
    if (level > 20) return "text-yellow-500"
    return "text-red-500"
  }

  const getTemperatureColor = (temp) => {
    if (temp < 30) return "text-green-500"
    if (temp < 35) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className={`rounded-lg border p-4 ${getStatusColor(helmet.status)}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <HardHatIcon className="h-6 w-6" />
          <span className="font-bold">#{helmet.id}</span>
        </div>
        <div className="flex items-center space-x-1">
          {helmet.status === "active" ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : helmet.status === "warning" ? (
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-red-500" />
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Battery className={`h-4 w-4 ${getBatteryColor(helmet.battery)}`} />
            <span className="text-sm">Battery</span>
          </div>
          <span className="font-medium">{helmet.battery}%</span>
        </div>
        <Progress value={helmet.battery} className="h-2" />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Thermometer className={`h-4 w-4 ${getTemperatureColor(helmet.temperature)}`} />
            <span className="text-sm">Temperature</span>
          </div>
          <span className="font-medium">{helmet.temperature}°C</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wifi className="h-4 w-4" />
            <span className="text-sm">Signal</span>
          </div>
          <span className="font-medium">{helmet.signal}</span>
        </div>

        <div className="pt-2 border-t">
          <p className="text-sm">
            <span className="font-medium">Location:</span> {helmet.location}
          </p>
          <p className="text-sm">
            <span className="font-medium">Rider:</span> {helmet.rider}
          </p>
          <p className="text-sm text-muted-foreground">Last active: {helmet.lastActive}</p>
        </div>
      </div>
    </div>
  )
}

export function HelmetGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {helmets.map((helmet) => (
        <HelmetCard key={helmet.id} helmet={helmet} />
      ))}
    </div>
  )
}

