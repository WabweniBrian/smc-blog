"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const data = [
  {
    date: "Jan 1",
    minor: 4,
    moderate: 3,
    severe: 1,
  },
  {
    date: "Jan 2",
    minor: 3,
    moderate: 2,
    severe: 2,
  },
  {
    date: "Jan 3",
    minor: 5,
    moderate: 4,
    severe: 0,
  },
  {
    date: "Jan 4",
    minor: 2,
    moderate: 3,
    severe: 1,
  },
  {
    date: "Jan 5",
    minor: 3,
    moderate: 1,
    severe: 2,
  },
  {
    date: "Jan 6",
    minor: 4,
    moderate: 2,
    severe: 1,
  },
  {
    date: "Jan 7",
    minor: 3,
    moderate: 3,
    severe: 0,
  },
]

export function IncidentsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
          labelStyle={{ color: "#1e293b" }}
        />
        <Legend />
        <Line type="monotone" dataKey="minor" stroke="#facc15" strokeWidth={2} dot={{ fill: "#facc15" }} />
        <Line type="monotone" dataKey="moderate" stroke="#f97316" strokeWidth={2} dot={{ fill: "#f97316" }} />
        <Line type="monotone" dataKey="severe" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444" }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

