import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Our Work"
          title="Selected launches built for speed and clarity."
          description="A selection of products I have helped design, build, and launch for real businesses."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
