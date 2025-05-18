"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

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

interface TeamMemberHeroProps {
  member: TeamMember;
}

export default function TeamMemberHero({ member }: TeamMemberHeroProps) {
  return (
    <div className="sticky top-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="aspect-square relative rounded-2xl overflow-hidden mb-8 shadow-xl">
          <Image
            src={member.image || "/placeholder.svg?height=400&width=400"}
            alt={member.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl font-bold text-white mb-1">
              {member.name}
            </h1>
            <p className="text-teal-400 font-medium">{member.role}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          {member.email && (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 shrink-0 rounded-full bg-teal-100 flex items-center justify-center">
                <Mail className="h-5 w-5 text-teal-600" />
              </div>
              <a
                href={`mailto:${member.email}`}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                {member.email}
              </a>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Github className="h-5 w-5 text-gray-700" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
