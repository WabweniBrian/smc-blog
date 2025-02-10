import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  MoreVertical,
  MapPin,
} from "lucide-react";

const incidents = [
  {
    id: "INC-001",
    date: "2024-02-10T09:00:00",
    rider: {
      name: "John Doe",
      avatar: "/avatars/01.png",
      id: "RID-123",
    },
    location: "Kampala Road",
    severity: "severe",
    status: "active",
    description: "Sudden impact detected, possible collision",
    helmetId: "H-456",
  },
  {
    id: "INC-002",
    date: "2024-02-10T08:45:00",
    rider: {
      name: "Sarah Smith",
      avatar: "/avatars/02.png",
      id: "RID-124",
    },
    location: "Nasser Road",
    severity: "moderate",
    status: "investigating",
    description: "Unusual movement pattern detected",
    helmetId: "H-789",
  },
  {
    id: "INC-003",
    date: "2024-02-10T08:30:00",
    rider: {
      name: "Mike Johnson",
      avatar: "/avatars/03.png",
      id: "RID-125",
    },
    location: "Parliament Avenue",
    severity: "minor",
    status: "resolved",
    description: "Battery level critical",
    helmetId: "H-101",
  },
];

function getSeverityIcon(severity: string) {
  switch (severity) {
    case "severe":
      return <AlertOctagon className="h-5 w-5 text-red-500" />;
    case "moderate":
      return <AlertCircle className="h-5 w-5 text-orange-500" />;
    case "minor":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    default:
      return <AlertTriangle className="h-5 w-5 text-gray-500" />;
  }
}

function getStatusBadgeColor(status: string) {
  switch (status) {
    case "active":
      return "bg-red-100 text-red-800 border-red-200";
    case "investigating":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "resolved":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

export function IncidentsList() {
  return (
    <div className="space-y-4 sm:space-y-8">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white rounded-lg p-4 border"
        >
          <div className="flex-shrink-0 self-start sm:self-center">
            {getSeverityIcon(incident.severity)}
          </div>

          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <p className="text-sm font-medium text-gray-900">
                  {incident.id}
                </p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(
                    incident.status
                  )}`}
                >
                  {incident.status.charAt(0).toUpperCase() +
                    incident.status.slice(1)}
                </span>
              </div>
              <time className="text-xs text-gray-500">
                {new Date(incident.date).toLocaleTimeString()}
              </time>
            </div>

            <p className="text-sm text-gray-600">{incident.description}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={incident.rider.avatar} />
                  <AvatarFallback>
                    {incident.rider.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {incident.rider.name}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {incident.location}
              </div>
              <div className="text-sm text-gray-500">
                Helmet ID: {incident.helmetId}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 self-end sm:self-start"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
