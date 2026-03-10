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
    <div className="mb-20">
      <p className="text-white/40 text-xs font-mono tracking-[0.3em] uppercase mb-6">{label}</p>

      <div
        className="platinum-card rounded-lg p-10 md:p-14 min-h-[200px] flex flex-col justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <SponsorLink
              url={sponsor.url}
              className={`flex items-center gap-10 md:gap-14 ${hasDesc ? 'flex-col md:flex-row' : 'flex-col justify-center'}`}
            >
              <div className={`shrink-0 flex items-center justify-center ${hasDesc ? 'w-full md:w-auto' : 'w-full'}`}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`w-auto object-contain ${hasDesc ? 'h-20 md:h-28 max-w-[260px] md:max-w-[320px]' : 'h-24 md:h-32 max-w-[300px] md:max-w-[400px]'}`}
                  loading="lazy"
                />
              </div>
              {hasDesc ? (
                <div className="text-center md:text-left flex-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-3">{sponsor.name}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{sponsor.desc}</p>
                </div>
              ) : (
                <p className="text-white/60 text-sm font-mono tracking-widest uppercase">{sponsor.name}</p>
              )}
            </SponsorLink>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        {sponsors.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {sponsors.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to sponsor ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50 w-2'
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
    <div className="mb-20">
      <p className="text-tko-yellow/60 text-xs font-mono tracking-[0.3em] uppercase mb-6">{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sponsors.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <SponsorLink
              url={s.url}
              className="flex items-center justify-center bg-neutral-900/80 border-2 border-tko-yellow/30 rounded-lg p-5 md:p-6 hover:border-tko-yellow hover:shadow-[0_0_20px_rgba(255,155,36,0.2)] transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-12 md:h-16 w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </SponsorLink>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

/* ─── Silver Wall ─── */
const SilverWall: React.FC<{ sponsors: Sponsor[]; label: string }> = ({ sponsors, label }) => {
  if (!sponsors.length) return null;

  return (
    <div>
      <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mb-6">{label}</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {sponsors.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.03}>
            <SponsorLink
              url={s.url}
              className="block opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-8 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </SponsorLink>
          </AnimatedSection>
        ))}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tko-yellow opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-tko-yellow font-bold tracking-extra-wide uppercase text-sm mb-3 block">
              {t.sponsors.sectionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
              {t.sponsors.title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Tiers */}
        <AnimatedSection>
          <PlatinumCarousel sponsors={platinum} label={t.sponsors.platinumLabel} />
        </AnimatedSection>

        <GoldGrid sponsors={gold} label={t.sponsors.goldLabel} />

        <AnimatedSection>
          <SilverWall sponsors={silver} label={t.sponsors.silverLabel} />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Sponsors;
