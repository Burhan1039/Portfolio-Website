import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SymbolIcon from './SymbolIcon';

const valueCards = [
  {
    title: 'Launch-ready MVPs',
    text: 'Products scoped with the right priorities and built to be usable from day one.',
    icon: 'rocket',
  },
  {
    title: 'Structured systems',
    text: 'Bubble.io and Xano architecture that stays maintainable as your product grows.',
    icon: 'layers',
  },
  {
    title: 'Smarter operations',
    text: 'n8n automation and clear workflows that remove manual complexity.',
    icon: 'workflow',
  },
];

function AboutSection() {
  return (
    <section id="about" className="section-wrap divider">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title="Product-focused execution for startups and SMBs."
          description="I’m Burhan Naeem, a Top Rated No-Code / Low-Code Developer and Vibe Coder helping teams move from idea to launch with Bubble.io, Xano, n8n, Cursor, Codex, and Replit."
        />

        <div className="card mt-8 p-6 sm:p-7">
          <p className="copy-muted">
            I specialize in turning early ideas into clean digital products with stable foundations, faster delivery cycles, and workflows that scale without friction.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {valueCards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="card flex min-h-[320px] flex-col p-7 transition hover:shadow-glow"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-200">
                <SymbolIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-[2rem] font-semibold leading-[1.1] tracking-tight text-white">{item.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
