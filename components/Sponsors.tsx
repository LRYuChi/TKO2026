import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import AnimatedSection from './AnimatedSection';
import { AnimatePresence, motion } from 'framer-motion';

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  desc?: string;
}

/* ─── Platinum Carousel ─── */
const PlatinumCarousel: React.FC<{ sponsors: Sponsor[]; label: string }> = ({ sponsors, label }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % sponsors.length);
  }, [sponsors.length]);

  useEffect(() => {
    if (paused || sponsors.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next, sponsors.length]);

  if (!sponsors.length) return null;

  const sponsor = sponsors[current];
  const hasDesc = sponsor.desc && sponsor.desc.trim().length > 0;

  return (
    <div className="mb-16">
      <p className="text-tko-yellow/50 text-xs font-mono tracking-[0.3em] uppercase mb-6">{label}</p>

      <div
        className="platinum-card rounded-xl p-10 md:p-16 min-h-[240px] flex flex-col justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <SponsorLink
              url={sponsor.url}
              className={`flex items-center gap-10 md:gap-16 ${hasDesc ? 'flex-col md:flex-row' : 'flex-col justify-center'}`}
            >
              <div className={`shrink-0 flex items-center justify-center ${hasDesc ? 'w-full md:w-auto' : 'w-full'}`}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`w-auto object-contain drop-shadow-[0_0_20px_rgba(255,155,36,0.15)] ${
                    hasDesc
                      ? 'h-24 md:h-36 max-w-[280px] md:max-w-[360px]'
                      : 'h-28 md:h-40 max-w-[320px] md:max-w-[440px]'
                  }`}
                  loading="lazy"
                />
              </div>
              {hasDesc ? (
                <div className="text-center md:text-left flex-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-3 drop-shadow-[0_0_10px_rgba(255,155,36,0.3)]">
                    {sponsor.name}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{sponsor.desc}</p>
                </div>
              ) : (
                <p className="text-white/70 text-sm font-mono tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(255,155,36,0.2)]">
                  {sponsor.name}
                </p>
              )}
            </SponsorLink>
          </motion.div>
        </AnimatePresence>

        {/* Bar indicators */}
        {sponsors.length > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {sponsors.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to sponsor ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-400 ${
                  i === current
                    ? 'bg-tko-yellow w-8'
                    : 'bg-white/20 hover:bg-white/40 w-4'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Gold Grid ─── */
const GoldGrid: React.FC<{ sponsors: Sponsor[]; label: string }> = ({ sponsors, label }) => {
  if (!sponsors.length) return null;

  return (
    <div className="mb-16">
      <p className="text-tko-yellow/60 text-xs font-mono tracking-[0.3em] uppercase mb-6">{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {sponsors.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <SponsorLink
              url={s.url}
              className="gold-card group flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-900/60 border-2 border-tko-yellow/30 rounded-xl p-5 md:p-7 hover:border-tko-yellow aspect-[4/3] relative overflow-hidden"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-14 md:h-20 w-auto max-w-full object-contain transition-all duration-300"
                loading="lazy"
              />
              <p className="absolute bottom-3 left-0 right-0 text-center text-white/0 group-hover:text-white/70 text-xs font-mono tracking-wider uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {s.name}
              </p>
            </SponsorLink>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

/* ─── Silver Marquee ─── */
const SilverMarquee: React.FC<{ sponsors: Sponsor[]; label: string }> = ({ sponsors, label }) => {
  if (!sponsors.length) return null;

  // Double the array for seamless loop
  const doubled = [...sponsors, ...sponsors];

  return (
    <div>
      <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mb-6">{label}</p>
      <div className="overflow-hidden rounded-lg py-6 bg-white/[0.02]">
        <div className="silver-marquee">
          {doubled.map((s, i) => (
            <SponsorLink
              key={i}
              url={s.url}
              className="shrink-0 block opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-10 md:h-14 w-auto object-contain"
                loading="lazy"
              />
            </SponsorLink>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Shared link wrapper ─── */
const SponsorLink: React.FC<{
  url?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ url, className, children }) => {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
};

/* ─── Divider ─── */
const TierDivider: React.FC = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
);

/* ─── Main Section ─── */
const Sponsors: React.FC = () => {
  const { t } = useTranslation();
  const { platinum, gold, silver } = t.sponsors;

  if (!platinum.length && !gold.length && !silver.length) {
    return null;
  }

  return (
    <section className="py-24 bg-tko-black border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tko-yellow opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-tko-yellow font-bold tracking-extra-wide uppercase text-sm mb-3 block">
              {t.sponsors.sectionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider bg-gradient-to-r from-white via-tko-yellow to-white bg-clip-text text-transparent">
              {t.sponsors.title}
            </h2>
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-tko-yellow/40" />
              <div className="w-2 h-2 rounded-full bg-tko-yellow/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-tko-yellow/40" />
            </div>
          </div>
        </AnimatedSection>

        {/* Tiers */}
        <AnimatedSection>
          <PlatinumCarousel sponsors={platinum} label={t.sponsors.platinumLabel} />
        </AnimatedSection>

        {platinum.length > 0 && gold.length > 0 && <TierDivider />}

        <GoldGrid sponsors={gold} label={t.sponsors.goldLabel} />

        {(platinum.length > 0 || gold.length > 0) && silver.length > 0 && <TierDivider />}

        <AnimatedSection>
          <SilverMarquee sponsors={silver} label={t.sponsors.silverLabel} />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Sponsors;
