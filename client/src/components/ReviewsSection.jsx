import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { reviews } from '../data/reviews';
import SymbolIcon from './SymbolIcon';

function ReviewsSection() {
  return (
    <section id="reviews" className="section-wrap divider">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="What founders and product leaders say."
          description="Feedback from teams I have collaborated with across product launches, UX improvements, and system scaling."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="card p-6 transition hover:shadow-glow"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-200">
                <SymbolIcon name="quote" className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[15px] leading-7 text-slate-200">{review.quote}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-base font-semibold text-white">{review.name}</p>
                <p className="mt-1 text-sm text-slate-400">{review.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
