import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { reviews } from '../data/reviews';

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Reviews"
          title="What clients say about working with me."
          description="Feedback from founders, product teams, and clients who trusted me to deliver high-quality work with clear communication."
        />
        <div className="mt-12 columns-1 gap-6 md:columns-2 xl:columns-3">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="surface-card mb-6 break-inside-avoid rounded-[1.5rem] p-6"
            >
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">"{review.quote}"</p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{review.name}</p>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{review.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
