import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/skills';

function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Toolkit"
          title="The platforms I use to move quickly."
          description="A focused stack built around delivery speed, automation, and launch-ready product execution."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                  <p className="mt-3 min-h-[132px] max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {group.description}
                  </p>
                </div>
                <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200">
                  {group.note}
                </span>
              </div>
              <div className="mt-6 flex min-h-[112px] flex-wrap content-start gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-100/80 px-4 py-4 dark:border-white/10 dark:bg-slate-900/50">
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Built to keep delivery fast, systems maintainable, and launches focused on outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
