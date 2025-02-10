"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="email-notifications">Email Notifications</Label>
          <p className="text-sm text-muted-foreground">Receive email notifications for important updates.</p>
        </div>
        <Switch id="email-notifications" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="sms-notifications">SMS Notifications</Label>
          <p className="text-sm text-muted-foreground">Receive SMS notifications for critical alerts.</p>
        </div>
        <Switch id="sms-notifications" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="push-notifications">Push Notifications</Label>
          <p className="text-sm text-muted-foreground">Receive push notifications on your mobile device.</p>
        </div>
        <Switch id="push-notifications" />
      </div>
    </div>
  )
}

