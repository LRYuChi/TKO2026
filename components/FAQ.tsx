import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import AnimatedSection from './AnimatedSection';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-tko-black border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-tko-yellow font-bold tracking-extra-wide uppercase text-sm mb-3 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
              {t.faq.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-white/10 bg-neutral-900/50">
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-white font-bold text-base pr-4">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
