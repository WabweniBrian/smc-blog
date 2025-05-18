"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  github?: string;
  linkedin?: string;
  contributions?: string[];
}

interface TeamMemberDetailsProps {
  member: TeamMember;
}

export default function TeamMemberDetails({ member }: TeamMemberDetailsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div
        variants={fadeIn}
        className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
            <span className="text-teal-600 text-sm font-bold">01</span>
          </span>
          About
        </h2>
        <p className="text-gray-700 leading-relaxed">{member.bio}</p>
      </motion.div>

      {member.contributions && (
        <motion.div
          variants={fadeIn}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
              <span className="text-teal-600 text-sm font-bold">02</span>
            </span>
            Contributions
          </h2>
          <ul className="space-y-4">
            {member.contributions.map((contribution, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mt-2 mr-3"></span>
                <span className="text-gray-700">{contribution}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.div variants={fadeIn} className="mt-8">
        <Link
          href="/#team"
          className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Team Members
        </Link>
      </motion.div>
    </motion.div>
  );
}
