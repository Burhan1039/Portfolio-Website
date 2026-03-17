import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 className="title-display mt-5">{title}</h2>
      <p className="copy-muted mt-6">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
