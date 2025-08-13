// components/ProjectsSection.tsx
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  }[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}