import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap divider">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent launches built for trust and conversion."
          description="A curated set of client products designed with a premium UX and built with fast, reliable no-code workflows."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
