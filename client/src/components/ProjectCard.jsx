import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition dark:border-white/10 dark:bg-slate-900/70"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6 flex items-center gap-4 text-sm font-medium">
          <a
            href={project.liveDemo}
            className="inline-flex items-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
