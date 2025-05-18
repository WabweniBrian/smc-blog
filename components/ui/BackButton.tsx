"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  href: string
  label: string
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Link href={href} className="inline-flex items-center mb-12 text-gray-700 hover:text-teal-600 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </motion.div>
  )
}
