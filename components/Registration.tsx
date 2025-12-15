import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Registration: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="registration" className="py-24 bg-tko-black scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-tko-red font-bold tracking-widest uppercase text-sm">{t.registration.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{t.registration.title}</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t.registration.method.content}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Option 1 */}
          <div className="bg-neutral-900 p-8 flex flex-col border border-white/10 hover:border-white transition-all duration-300 shadow-sm hover:shadow-glow">
            <div className="mb-4">
              <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Entry Level</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">{t.registration.fees.basic.name}</h3>
            <div className="text-4xl font-heading font-bold text-white mb-6">{t.registration.fees.basic.price}</div>
            <ul className="space-y-4 mb-8 flex-grow border-t border-white/10 pt-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-green mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">{t.registration.fees.basic.includes}</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest transition-colors">
              即將開放
            </button>
          </div>

          {/* Option 2 (Highlighted) */}
          <div className="bg-tko-yellow p-8 flex flex-col transform md:-translate-y-4 shadow-2xl relative">
             <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">{t.registration.fees.packages.valuePack.mostPopular}</div>
            <div className="mb-4">
              <span className="text-black/60 text-sm font-bold uppercase tracking-widest">{t.registration.fees.packages.valuePack.label}</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-black mb-2">{t.registration.fees.packages.valuePack.title}</h3>
            <div className="text-4xl font-heading font-bold text-black mb-1">
                {t.registration.fees.packages.valuePack.comingSoon}
            </div>
             <div className="text-sm text-black/60 mb-6 uppercase tracking-wide">{t.registration.fees.packages.valuePack.priceTbd}</div>
            <ul className="space-y-4 mb-8 flex-grow border-t border-black/10 pt-6">
              {t.registration.fees.packages.valuePack.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-black/80 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-black hover:bg-neutral-800 text-tko-yellow font-bold uppercase tracking-widest transition-colors">
              {t.registration.fees.packages.valuePack.button}
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-neutral-900 p-8 flex flex-col border border-white/10 hover:border-tko-red transition-all duration-300 shadow-sm hover:shadow-glow-red">
            <div className="mb-4">
              <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">{t.registration.fees.packages.fullGear.label}</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">{t.registration.fees.packages.fullGear.title}</h3>
            <div className="text-4xl font-heading font-bold text-tko-red mb-1">{t.registration.fees.packages.fullGear.comingSoon}</div>
             <div className="text-sm text-gray-500 mb-6 uppercase tracking-wide">{t.registration.fees.packages.fullGear.priceTbd}</div>
            <ul className="space-y-4 mb-8 flex-grow border-t border-white/10 pt-6">
              {t.registration.fees.packages.fullGear.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-tko-red mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-white/10 hover:bg-tko-red text-white hover:text-white font-bold uppercase tracking-widest transition-colors">
              {t.registration.fees.packages.fullGear.button}
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-neutral-900 px-8 py-4 border border-tko-yellow shadow-[4px_4px_0px_0px_#FF9B24]">
                <span className="text-3xl">🎓</span>
                <div className="text-left">
                    <div className="text-white font-bold text-base uppercase tracking-wide">{t.registration.fees.discount.title}</div>
                    <div className="text-base text-gray-400">{t.registration.fees.discount.content}</div>
                </div>
            </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400 font-mono">
            {t.registration.fees.notes}<br/>
            {t.registration.fees.proNote}
        </div>

      </div>
    </section>
  );
};

export default Registration;