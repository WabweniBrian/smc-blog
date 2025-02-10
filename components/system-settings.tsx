"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SystemSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <p className="text-sm text-muted-foreground">Enable dark mode for the dashboard.</p>
        </div>
        <Switch id="dark-mode" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="language">Language</Label>
        <Select>
          <SelectTrigger id="language">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <Select>
          <SelectTrigger id="timezone">
            <SelectValue placeholder="Select Timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="utc">UTC</SelectItem>
            <SelectItem value="est">Eastern Time</SelectItem>
            <SelectItem value="cst">Central Time</SelectItem>
            <SelectItem value="pst">Pacific Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

