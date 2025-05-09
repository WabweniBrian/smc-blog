"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

interface FeatureCardProps {
  index: number
  title: string
  description: string
}

export default function FeatureCard({ index, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
    >
      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-teal-600 font-bold">{index + 1}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
