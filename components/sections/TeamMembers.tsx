"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Users } from "lucide-react";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

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

interface TeamMembersProps {
  teamMembers: TeamMember[];
}

export default function TeamMembers({ teamMembers }: TeamMembersProps) {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      id="team"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <div className="h-1 w-16 bg-teal-400"></div>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Users className="h-5 w-5 text-teal-400" />
            <span className="text-gray-300">{teamMembers.length} Members</span>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
