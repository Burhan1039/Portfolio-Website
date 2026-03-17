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

      setStatus({ loading: false, error: '', success: data.message || 'Message sent successfully.' });
      setFormData(initialState);
    } catch (error) {
      const message = error instanceof TypeError
        ? 'Unable to reach the email service right now. Please try again in a moment.'
        : error.message;
      setStatus({ loading: false, error: message, success: '' });
    }
  };

  return (
    <section id="contact" className="section-wrap divider">
      <div className="shell">
        <div className="panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build your next product with speed and clarity."
                description="Share your project idea and I will help you shape a practical build plan, timeline, and execution path."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="mailto:burhannaeem09@gmail.com" className="card-soft px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">Email</p>
                  <p className="mt-2 text-sm text-slate-200">burhannaeem09@gmail.com</p>
                </a>
                <a href="https://www.linkedin.com/in/burhanb72/" target="_blank" rel="noreferrer" className="card-soft px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">LinkedIn</p>
                  <p className="mt-2 text-sm text-slate-200">linkedin.com/in/burhanb72</p>
                </a>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              onSubmit={handleSubmit}
              className="card p-6 sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400"
                    placeholder="Your name"
                  />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400"
                    placeholder="Tell me about your project"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.loading ? 'Sending...' : 'Send message'}
                </button>
                {status.error && <p className="text-sm text-rose-400">{status.error}</p>}
                {status.success && <p className="text-sm text-brand-300">{status.success}</p>}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
