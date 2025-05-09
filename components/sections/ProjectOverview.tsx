"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface ProjectOverviewProps {
  description: string;
}

export default function ProjectOverview({ description }: ProjectOverviewProps) {
  return (
    <section id="overview" className="py-24 max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="h-px flex-grow bg-gray-200"></div>
          <h2 className="text-3xl font-bold px-4">Project Overview</h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </motion.div>
    </section>
  );
}
