import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, AlertOctagon, AlertTriangle } from "lucide-react";

const incidentStyles = {
  minor: {
    bg: "bg-yellow-100",
    icon: AlertTriangle,
    iconColor: "text-yellow-500",
    text: "text-yellow-800",
  },
  moderate: {
    bg: "bg-orange-100",
    icon: AlertCircle,
    iconColor: "text-orange-500",
    text: "text-orange-800",
  },
  severe: {
    bg: "bg-red-100",
    icon: AlertOctagon,
    iconColor: "text-red-500",
    text: "text-red-800",
  },
};

interface IncidentItemProps {
  name: string;
  email: string;
  severity: string;
  avatar: string;
}

function IncidentItem({ name, email, severity, avatar }: IncidentItemProps) {
  const style = incidentStyles[severity as keyof typeof incidentStyles];
  const Icon = style.icon;

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center p-4 rounded-lg ${style.bg}`}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="mt-2 sm:mt-0 sm:ml-4 flex-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className={`mt-2 sm:mt-0 flex items-center ${style.text}`}>
        <Icon className={`h-5 w-5 mr-1 ${style.iconColor}`} />
        <span className="text-sm font-medium capitalize">{severity}</span>
      </div>
    </div>
  );
}

export function RecentIncidents() {
  const incidents = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      severity: "minor",
      avatar: "/avatars/01.png",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      severity: "severe",
      avatar: "/avatars/02.png",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      severity: "moderate",
      avatar: "/avatars/03.png",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      severity: "minor",
      avatar: "/avatars/04.png",
    },
  ];

  return (
    <div className="space-y-4">
      {incidents.map((incident, index) => (
        <IncidentItem key={index} {...incident} />
      ))}
    </div>
  );
}
