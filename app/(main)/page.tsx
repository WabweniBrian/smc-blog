import { projectData, timelineData, teamMembers } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import ProjectOverview from "@/components/sections/ProjectOverview";
import KeyFeatures from "@/components/sections/KeyFeatures";
import Timeline from "@/components/sections/Timeline";
import TeamMembers from "@/components/sections/TeamMembers";
import Conclusion from "@/components/sections/Conclusion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Hero
        title={projectData.title}
        description={projectData.shortDescription}
      />

      <ProjectOverview description={projectData.description} />

      <KeyFeatures features={projectData.features} />

      <Timeline timelineData={timelineData} />

      <TeamMembers teamMembers={teamMembers} />

      <Conclusion conclusion={projectData.conclusion} />
    </main>
  );
}
