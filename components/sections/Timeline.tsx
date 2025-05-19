"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";

interface TimelineItemType {
  period: string;
  title: string;
  completion: number;
  tasks: string[];
}

interface TimelineProps {
  timelineData: TimelineItemType[];
}

export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <SectionTitle title="Project Timeline" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
