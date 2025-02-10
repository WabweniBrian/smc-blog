"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"

const helmets = [
  { id: 1, lat: 20, lng: 30, status: "active", location: "Kampala Road" },
  { id: 2, lat: 40, lng: 50, status: "inactive", location: "Nasser Road" },
  { id: 3, lat: 60, lng: 40, status: "warning", location: "Parliament Avenue" },
]

export function HelmetMap() {
  const [selectedHelmet, setSelectedHelmet] = useState(null)

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-feh2jbhPFOu3Np6KSwWnf2YrSPXqCT.png"
        alt="Map of Kampala"
        fill
        className="object-cover"
      />
      {helmets.map((helmet) => (
        <div
          key={helmet.id}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
          style={{
            left: `${helmet.lng}%`,
            top: `${helmet.lat}%`,
          }}
          onClick={() => setSelectedHelmet(helmet)}
        >
          <div
            className={`
            relative p-1 rounded-full
            ${
              helmet.status === "active" ? "bg-green-500" : helmet.status === "warning" ? "bg-yellow-500" : "bg-red-500"
            }
          `}
          >
            <MapPin className="h-6 w-6 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span
                className={`
                animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                ${
                  helmet.status === "active"
                    ? "bg-green-400"
                    : helmet.status === "warning"
                      ? "bg-yellow-400"
                      : "bg-red-400"
                }
              `}
              ></span>
              <span
                className={`
                relative inline-flex rounded-full h-3 w-3
                ${
                  helmet.status === "active"
                    ? "bg-green-500"
                    : helmet.status === "warning"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }
              `}
              ></span>
            </span>
          </div>
        </div>
      ))}
      {selectedHelmet && (
        <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-bold">Helmet #{selectedHelmet.id}</h3>
          <p className="text-sm text-gray-600">Location: {selectedHelmet.location}</p>
          <p className="text-sm">
            <span
              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                selectedHelmet.status === "active"
                  ? "bg-green-500"
                  : selectedHelmet.status === "warning"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            ></span>
            {selectedHelmet.status.charAt(0).toUpperCase() + selectedHelmet.status.slice(1)}
          </p>
        </div>
      )}
    </div>
  )
}

