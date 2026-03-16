import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const initialState = {
  name: '',
  email: '',
  message: '',
};
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/burhannaeem09@gmail.com';

function ContactSection() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    if (formData.message.trim().length < 10) {
      setStatus({
        loading: false,
        error: 'Please enter at least 10 characters in your message.',
        success: '',
      });
      return;
    }

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New portfolio inquiry from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus({ loading: false, error: '', success: data.message });
      setFormData(initialState);
    } catch (error) {
      const message = error instanceof TypeError
        ? 'Unable to reach the email service right now. Please try again in a moment.'
        : error.message;

      setStatus({ loading: false, error: message, success: '' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s launch your next product faster."
            description="If you need an MVP, internal tool, automation workflow, or a scalable no-code/low-code system, I’m available for freelance builds, ongoing partnerships, and product-focused collaborations."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="surface-soft rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">Email</p>
              <a href="mailto:burhannaeem09@gmail.com" className="mt-2 block text-sm text-slate-700 transition hover:text-brand-500 dark:text-slate-200">
                burhannaeem09@gmail.com
              </a>
            </div>
            <div className="surface-soft rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">LinkedIn</p>
              <a href="https://www.linkedin.com/in/burhanb72/" target="_blank" rel="noreferrer" className="mt-2 block text-sm text-slate-700 transition hover:text-brand-500 dark:text-slate-200">
                linkedin.com/in/burhanb72
              </a>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="surface-card rounded-[1.75rem] p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:focus:border-brand-300"
                placeholder="Your name"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:focus:border-brand-300"
                placeholder="you@example.com"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:focus:border-brand-300"
                placeholder="Tell me about your project or opportunity"
              />
            </label>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status.loading}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.error && <p className="text-sm text-rose-300">{status.error}</p>}
            {status.success && <p className="text-sm text-brand-700 dark:text-brand-200">{status.success}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
