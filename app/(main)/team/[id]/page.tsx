"use client";

import { teamMembers } from "@/lib/data";
import { notFound } from "next/navigation";
import TeamMemberHero from "@/components/sections/TeamMemberHero";
import TeamMemberDetails from "@/components/sections/TeamMemberDetails";
import BackButton from "@/components/ui/BackButton";

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <BackButton href="/" label="Back to Home" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <TeamMemberHero member={member} />
          </div>

          <div className="lg:col-span-2">
            <TeamMemberDetails member={member} />
          </div>
        </div>
      </div>
    </main>
  );
}
