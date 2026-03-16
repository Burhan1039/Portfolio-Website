import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { technologies } from '../data/skills';

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionHeading
          eyebrow="About Me"
          title="Fast product execution for startups and SMBs."
          description="I’m Burhan Naeem, a Top Rated No-Code / Low-Code Developer and Vibe Coder with 2+ years of experience helping businesses validate ideas, launch MVPs, and scale products faster using Bubble.io, Xano, n8n, Cursor, Codex, and Replit."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="surface-card rounded-[1.75rem] p-8"
        >
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            I specialize in building full-stack applications with Bubble.io and Xano, helping teams move from idea to live product in weeks instead of months. I also use n8n to streamline complex workflows, along with Cursor, Codex, and Replit to move faster, reduce manual effort, and build systems that scale cleanly as products grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-700 dark:text-brand-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="surface-soft rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">What clients get</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Fast execution, clear communication, and product decisions shaped around real launch goals.</p>
            </div>
            <div className="surface-soft rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">How I work</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Lean builds, structured workflows, and polished frontends that feel trustworthy to end users.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
