"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

interface ConclusionProps {
  conclusion: string;
}

export default function Conclusion({ conclusion }: ConclusionProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="h-px flex-grow bg-gray-200"></div>
          <h2 className="text-3xl font-bold px-4">Conclusion</h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">{conclusion}</p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#"
            className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors inline-flex items-center group"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
