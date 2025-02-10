"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 50) + 10,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
          labelStyle={{ color: "#1e293b" }}
        />
        <Bar dataKey="total" fill="#2563EB" radius={[4, 4, 0, 0]} />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  )
}

