import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/MondragonCid/CSIT340Section-Lab2-Mondragon"
        />
        <ProjectCard
          year="2025"
          title="Report System"
          description="A web that allows Students to report damages around the Campus. Dedicated for CIT-U."
          tech="myPhp · mySQL"
          link="https://github.com/MondragonCid/ReportSystem"
        />
        <ProjectCard
          year="2025"
          title="StressPandemic"
          description="A text based RPG game based on CIT-U."
          tech="Java"
          link="https://github.com/MondragonCid/StressPandemic"
        />
        <ProjectCard
          year="2025"
          title="Inventory Management"
          description="An inventory management dedicated for Coffee Shops."
          tech="Java · mySQL"
          link="https://github.com/MondragonCid/Inventory-Management"
        />
      </div>
    </section>
  );
}