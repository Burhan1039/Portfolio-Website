import { motion } from 'framer-motion';

const tools = [
  { name: 'Bubble.io' },
  { name: 'Xano' },
  { name: 'n8n' },
  { name: 'Cursor' },
  { name: 'Codex' },
  { name: 'Replit' },
];

function SkillMotionSection() {
  return (
    <section className="section-wrap pt-8 sm:pt-10">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-900/55 px-4 py-7 sm:px-6 sm:py-8">
          <motion.div
            animate={{ x: [0, 18, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-brand-500/15 to-transparent blur-2xl"
          />
          <motion.div
            animate={{ x: [0, -18, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-cyan-400/15 to-transparent blur-2xl"
          />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Core toolkit</p>
          <h3 className="mt-4 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Platforms I use to move from idea to launch
          </h3>
          <div className="relative mt-8 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="flex min-w-max items-center gap-16 whitespace-nowrap"
            >
              {tools.concat(tools).map((tool, index) => (
                <span
                  key={`${tool.name}-${index}`}
                  className="text-2xl font-semibold tracking-tight text-slate-100/90"
                >
                  {tool.name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillMotionSection;
