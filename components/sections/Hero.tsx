"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <Image
        src="/smart-helment.webp"
        alt="Motorcycle Safety"
        fill
        className="object-cover"
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center px-4"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <div className="h-1 w-24 bg-teal-400 mb-6"></div>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
          {description}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href="#overview"
            className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors inline-flex items-center group"
          >
            Explore Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
