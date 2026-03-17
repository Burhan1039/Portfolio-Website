import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const speed = (desktopDuration) => (isMobile ? desktopDuration * 0.72 : desktopDuration * 0.86);

  return (
    <section id="home" className="section-wrap pt-6 sm:pt-8 lg:pt-10">
      <div className="shell">
        <div className="panel relative overflow-hidden p-5 sm:p-7 lg:p-8">
          <motion.div
            animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
            transition={{ duration: speed(12), repeat: Infinity, ease: 'easeInOut' }}
            className="blur-orb -left-24 -top-24 h-72 w-72 bg-brand-500/20"
          />
          <motion.div
            animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
            transition={{ duration: speed(13), repeat: Infinity, ease: 'easeInOut' }}
            className="blur-orb -bottom-20 right-8 h-80 w-80 bg-cyan-400/14"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="eyebrow"
              >
                Top Rated No-Code / Low-Code Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.08 }}
                className="mt-5 font-display text-[2rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.6rem]"
              >
                I design and launch high-performing digital products for ambitious startups.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.16 }}
                className="copy-muted mt-5 max-w-2xl text-[0.98rem] leading-7"
              >
                I help teams move from idea to live product with Bubble.io, Xano, n8n, Cursor, Codex, and Replit through a clean system, premium UI quality, and focused execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.24 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a href="#projects" className="btn-primary">View projects</a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-[#0b1628] to-[#0a1020] p-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: speed(26), repeat: Infinity, ease: 'linear' }}
                  className="absolute left-1/2 top-[28%] h-52 w-52 -translate-x-1/2 rounded-full border border-brand-300/18"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: speed(18), repeat: Infinity, ease: 'linear' }}
                  className="absolute left-1/2 top-[28%] h-64 w-64 -translate-x-1/2 rounded-full border border-cyan-300/16"
                />

                <motion.svg
                  viewBox="0 0 560 560"
                  className="w-full"
                  animate={{ y: [0, -10, 0], rotate: [0, 0.6, 0, -0.6, 0] }}
                  transition={{ duration: speed(7.5), repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                >
                  <path d="M140 478h280v22H140z" fill="#0d1b2e" />

                  <circle cx="286" cy="166" r="96" fill="#0f253c" />
                  <ellipse cx="286" cy="166" rx="78" ry="70" fill="url(#visorFill)" stroke="#8af4e3" strokeWidth="3" />

                  <path d="M354 168c18 7 30 21 35 40l22 66h-43l-15-50z" fill="#0fa89a" opacity="0.8" />
                  <path d="M218 168c-18 7-30 21-35 40l-22 66h43l15-50z" fill="#0fa89a" opacity="0.8" />

                  <rect x="212" y="256" width="148" height="136" rx="58" fill="#0d2034" />
                  <rect x="224" y="272" width="124" height="106" rx="44" fill="#133150" />
                  <circle cx="286" cy="318" r="30" fill="#1ed7c4" opacity="0.88" />
                  <path d="M272 318l9 10 20-22" fill="none" stroke="#072029" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

                  <rect x="222" y="382" width="40" height="78" rx="18" fill="#10263d" />
                  <rect x="312" y="382" width="40" height="78" rx="18" fill="#10263d" />
                  <rect x="214" y="450" width="58" height="24" rx="12" fill="#0b1727" />
                  <rect x="304" y="450" width="58" height="24" rx="12" fill="#0b1727" />

                  <g fill="#7af3e1" opacity="0.85">
                    <circle cx="90" cy="112" r="6" />
                    <circle cx="118" cy="84" r="4" />
                    <circle cx="454" cy="110" r="6" />
                    <circle cx="474" cy="87" r="4" />
                    <circle cx="486" cy="124" r="5" />
                  </g>
                  <g fill="#7af3e1" opacity="0.7">
                    <circle cx="132" cy="152" r="3" />
                    <circle cx="444" cy="156" r="3" />
                    <circle cx="418" cy="200" r="2.5" />
                  </g>

                  <defs>
                    <radialGradient id="visorFill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(272 143) rotate(54) scale(120)">
                      <stop stopColor="#dffbff" />
                      <stop offset="0.58" stopColor="#82dfff" />
                      <stop offset="1" stopColor="#498fb6" />
                    </radialGradient>
                  </defs>
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
