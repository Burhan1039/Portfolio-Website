import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillGroups, technologies } from '../data/skills';

function SkillsSection() {
  return (
    <section id="skills" className="section-wrap divider">
      <div className="shell">
        <div className="panel p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Tool Stack"
            title="The stack I use to move quickly without compromising quality."
            description="A focused combination of build platforms, AI coding tools, and delivery capabilities for launch-ready products."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <span className="rounded-full border border-brand-400/35 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                    {group.note}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
