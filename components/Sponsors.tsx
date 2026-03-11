import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import AnimatedSection from './AnimatedSection';

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  desc?: string;
}

/* ─── Platinum Stack ─── */
const PlatinumStack: React.FC<{ sponsors: Sponsor[]; label: string }> = ({ sponsors, label }) => {
  if (!sponsors.length) return null;

  return (
    <div className="mb-16">
      <p className="text-sm md:text-base font-bold text-white/80 tracking-[0.3em] uppercase mb-8">{label}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sponsors.map((s, i) => {
          const hasDesc = s.desc && s.desc.trim().length > 0;
          return (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="platinum-card rounded-xl p-6 md:p-8 h-full">
                <SponsorLink
                  url={s.url}
                  className="flex flex-col items-center justify-center gap-5 h-full"
                >
                  <div className="platinum-logo shrink-0">
                    <img
                      src={s.logo}
                      alt={s.name}
                      className="h-24 md:h-32 w-auto max-w-[260px] md:max-w-[340px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white text-base md:text-lg font-bold drop-shadow-[0_0_10px_rgba(255,155,36,0.3)]">
                      {s.name}
                    </h4>
                    {hasDesc && (
                      <p className="text-gray-400 text-sm leading-relaxed mt-2">{s.desc}</p>
                    )}
                  </div>
                </SponsorLink>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
};

/* ─── Gold Grid ─── */
const GoldGrid: React.FC<{ sponsors: Sponsor[]; label: string }> = ({ sponsors, label }) => {
  if (!sponsors.length) return null;

  return (
    <div className="mb-16">
      <p className="text-sm md:text-base font-bold text-tko-yellow/80 tracking-[0.3em] uppercase mb-8">{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {sponsors.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <SponsorLink
              url={s.url}
              className="gold-card group flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-900/60 rounded-xl p-5 md:p-7 aspect-[4/3]"
            >
              <div className="gold-logo">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-14 md:h-20 w-auto max-w-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
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

  const doubled = [...sponsors, ...sponsors];

  return (
    <div>
      <p className="text-sm md:text-base font-bold text-white/50 tracking-[0.3em] uppercase mb-8">{label}</p>
      <div className="overflow-hidden rounded-lg py-8 md:py-10 bg-white/[0.02]">
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
                className="h-14 md:h-20 w-auto object-contain"
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
        <PlatinumStack sponsors={platinum} label={t.sponsors.platinumLabel} />

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
