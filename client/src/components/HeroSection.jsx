import { motion } from 'framer-motion';

const trustedItems = ['Writeless', 'Waterland', 'Boomerang', 'Writeless', 'Waterland', 'Boomerang'];
const processItems = [
  {
    step: '1',
    title: 'Plan',
    description: 'I help shape your idea into a clear product direction with the right scope, features, and launch priorities.',
  },
  {
    step: '2',
    title: 'Launch',
    description: 'I design and build your product with fast, modern tools so you can move from concept to live release quickly.',
  },
  {
    step: '3',
    title: 'Grow',
    description: 'Once your product is live, I help improve workflows, automate repetitive tasks, and support the next phase of growth.',
  },
];

function HeroSection() {
  return (
    <section id="home" className="pt-8 sm:pt-10">
      <div className="shell py-8 sm:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Building launch-ready products for fast-moving startups
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            I help founders and growing businesses plan, build, and scale digital products with Bubble.io, Xano, n8n, Cursor, Codex, and Replit.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-950"
            >
              Get started
            </a>
          </motion.div>
        </div>
      </div>

      <div className="page-divider">
        <div className="shell py-16">
          <p className="text-center text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
            Trusted by fast-moving product teams and startup founders
          </p>
          <div className="mt-10 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="flex min-w-max gap-6"
            >
              {trustedItems.concat(trustedItems).map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="surface-soft min-w-[220px] rounded-2xl px-8 py-6 text-center text-2xl font-semibold text-slate-700 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="page-divider">
        <div className="shell py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              How we move from idea to launch
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              A simple process focused on clarity, speed, and building products that are ready for real users.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {processItems.map((item) => (
              <div key={item.step} className="surface-card relative rounded-[1.75rem] px-8 pb-8 pt-14 text-center">
                <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-brand-400 to-brand-600 text-3xl font-bold text-white shadow-glow">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
