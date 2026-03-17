import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="card group overflow-hidden transition hover:shadow-glow"
    >
      <div className="relative overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04101a]/55 to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 border-t border-white/10 pt-5">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-5 py-2.5"
          >
            Live demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
