import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SymbolIcon from './SymbolIcon';

const services = [
  {
    title: 'Product Strategy',
    description: 'Define the right launch scope, roadmap, and success metrics before build starts.',
    icon: 'layers',
  },
  {
    title: 'Rapid Build',
    description: 'Build polished MVPs with Bubble.io and Xano that are production-ready from day one.',
    icon: 'rocket',
  },
  {
    title: 'Workflow Automation',
    description: 'Implement n8n automations and internal systems that remove operational bottlenecks.',
    icon: 'workflow',
  },
  {
    title: 'Scale & Iterate',
    description: 'Improve conversions, optimize UX, and scale architecture after launch with confidence.',
    icon: 'chart',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section-wrap divider">
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title="A product delivery model built for speed and quality."
          description="From strategy to launch and post-release optimization, every step is designed to keep momentum high and quality consistent."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.46, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="card group p-6 transition hover:shadow-glow"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                <SymbolIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
