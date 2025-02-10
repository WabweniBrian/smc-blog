"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-4">Change Password</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Two-Factor Authentication</h4>
        <Button variant="outline">Enable 2FA</Button>
      </div>
    </div>
  )
}

