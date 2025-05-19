"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Link href={`/team/${member.id}`} className="block h-full">
      <motion.div
        variants={fadeIn}
        whileHover={{ y: -10 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group"
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={member.image || "/default-avatar.png"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-teal-400 mb-4">{member.role}</p>
          <div className="inline-flex items-center text-white group/link">
            View Profile
            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
