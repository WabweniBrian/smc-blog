"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertTriangle, AlertCircle, AlertOctagon, X } from "lucide-react"

export function IncidentFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-4">Severity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="severity-minor" defaultChecked />
            <Label htmlFor="severity-minor" className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
              Minor
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="severity-moderate" defaultChecked />
            <Label htmlFor="severity-moderate" className="flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
              Moderate
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="severity-severe" defaultChecked />
            <Label htmlFor="severity-severe" className="flex items-center">
              <AlertOctagon className="w-4 h-4 mr-2 text-red-500" />
              Severe
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Time Period</h3>
        <RadioGroup defaultValue="week" className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="today" id="today" />
            <Label htmlFor="today">Today</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="week" id="week" />
            <Label htmlFor="week">Past Week</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="month" id="month" />
            <Label htmlFor="month">Past Month</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Active Filters</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center">
            Minor Incidents
            <Button variant="ghost" size="icon" className="h-4 w-4 ml-2 hover:bg-transparent">
              <X className="h-3 w-3" />
            </Button>
          </Badge>
          <Badge variant="secondary" className="flex items-center">
            Past Week
            <Button variant="ghost" size="icon" className="h-4 w-4 ml-2 hover:bg-transparent">
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        </div>
      </div>
    </div>
  )
}

