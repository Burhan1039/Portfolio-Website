import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500 dark:text-brand-300">{eyebrow}</p>
      <h2 className="section-title mt-3 text-slate-950 dark:text-slate-50">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
