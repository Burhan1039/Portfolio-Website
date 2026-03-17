import { motion } from 'framer-motion';

const trustedItems = ['Writeless', 'Waterland Chiropractic', 'Boomerang', 'Nexus.IT', 'SkinSense AI'];

function TrustedSection() {
  return (
    <section className="divider">
      <div className="shell py-14 sm:py-16">
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
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Trusted by startup founders and product teams
          </p>
          <div className="relative mt-7 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="flex min-w-max items-center gap-16 whitespace-nowrap"
            >
              {trustedItems.concat(trustedItems).map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="text-2xl font-semibold tracking-tight text-slate-100/90"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
