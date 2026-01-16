import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Registration: React.FC = () => {
  const { t } = useTranslation();

  const handleRegister = () => {
    window.open(t.registration.fees.registrationUrl, '_blank');
  };

  return (
    <section id="registration" className="py-24 bg-tko-black scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-tko-red font-bold tracking-extra-wide uppercase text-sm mb-3 block drop-shadow">{t.registration.subtitle}</span>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-8 tracking-tight leading-tight">{t.registration.title}</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed-plus">
            {t.registration.method.content}
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-3">
            {t.registration.method.note}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Plan A - Basic */}
          <div className="bg-neutral-900 p-6 flex flex-col border border-white/10 hover:border-white transition-all duration-300 shadow-sm hover:shadow-glow">
            <h3 className="text-xl font-heading font-bold text-white mb-2">{t.registration.fees.planA.label}</h3>
            <div className="text-3xl font-heading font-bold text-white mb-4">{t.registration.fees.planA.price}</div>
            <div className="text-gray-300 text-sm mb-6 pb-6 border-b border-white/10">
              {t.registration.fees.planA.includes}
            </div>
            <button
              onClick={handleRegister}
              className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest transition-colors text-sm mt-auto"
            >
              {t.registration.fees.planA.button}
            </button>
          </div>

          {/* Plan B - Towel Pack */}
          <div className="bg-neutral-900 p-6 flex flex-col border border-white/10 hover:border-white transition-all duration-300 shadow-sm hover:shadow-glow">
            <h3 className="text-xl font-heading font-bold text-white mb-2">{t.registration.fees.planB.label}</h3>
            <div className="text-3xl font-heading font-bold text-white mb-4">{t.registration.fees.planB.price}</div>
            <div className="text-gray-300 text-sm mb-6 pb-6 border-b border-white/10">
              {t.registration.fees.planB.includes}
            </div>
            <button
              onClick={handleRegister}
              className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest transition-colors text-sm mt-auto"
            >
              {t.registration.fees.planB.button}
            </button>
          </div>

          {/* Plan C - Tee Pack */}
          <div className="bg-neutral-900 p-6 flex flex-col border border-white/10 hover:border-white transition-all duration-300 shadow-sm hover:shadow-glow">
            <h3 className="text-xl font-heading font-bold text-white mb-2">{t.registration.fees.planC.label}</h3>
            <div className="text-3xl font-heading font-bold text-white mb-4">{t.registration.fees.planC.price}</div>
            <div className="text-gray-300 text-sm mb-6 pb-6 border-b border-white/10">
              {t.registration.fees.planC.includes}
            </div>
            <button
              onClick={handleRegister}
              className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest transition-colors text-sm mt-auto"
            >
              {t.registration.fees.planC.button}
            </button>
          </div>

          {/* Plan D - Full Package (Highlighted) */}
          <div className="bg-tko-yellow p-6 flex flex-col relative shadow-2xl transform lg:scale-105">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">{t.registration.fees.planD.labelTag}</div>
            <h3 className="text-xl font-heading font-bold text-black mb-2">{t.registration.fees.planD.label}</h3>
            <div className="text-3xl font-heading font-bold text-black mb-4">{t.registration.fees.planD.price}</div>
            <div className="text-black/80 text-sm mb-6 pb-6 border-b border-black/10">
              {t.registration.fees.planD.includes}
            </div>
            <button
              onClick={handleRegister}
              className="w-full py-3 bg-black hover:bg-neutral-800 text-tko-yellow font-bold uppercase tracking-widest transition-colors text-sm mt-auto"
            >
              {t.registration.fees.planD.button}
            </button>
          </div>
        </div>

        {/* Merchandise Showcase Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <span className="text-tko-yellow font-bold tracking-extra-wide uppercase text-sm mb-3 block drop-shadow">{t.registration.merchandise.subtitle}</span>
            <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">{t.registration.merchandise.title}</h3>
            <p className="text-gray-300 text-base max-w-2xl mx-auto">{t.registration.merchandise.description}</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Main Merchandise Showcase Image */}
            <div className="bg-neutral-900 p-6 border border-white/10 hover:border-tko-yellow transition-all duration-300">
              <img
                src="https://lh3.googleusercontent.com/d/10cbuOISqNdCr9nDqjgFJtL7CZaP-R1hN"
                alt="TKO Merchandise Showcase - Towel, Poster, Tote Bag, Pin, Keychain, Lighter"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1200x800/1a1a1a/ffffff?text=TKO+Merchandise+Collection';
                }}
              />
            </div>

            {/* Tee and Socks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900 p-6 border border-white/10 hover:border-tko-yellow transition-all duration-300">
                <img
                  src="https://lh3.googleusercontent.com/d/1TNU4Btf9H2e83Xz-DYoOALjKCj0nR4pZ"
                  alt="TKO Tee Black - Front and Back"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=TKO+Tee';
                  }}
                />
                <p className="text-gray-400 text-sm mt-3">S / M / L / XL / 2XL / 3XL</p>
              </div>

              <div className="bg-neutral-900 p-6 border border-white/10 hover:border-tko-yellow transition-all duration-300">
                <img
                  src="https://lh3.googleusercontent.com/d/1sqFVIXBrqQItjZ0OtvG-DGUkSvhiQR-b"
                  alt="TKO Socks Black"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=TKO+Socks';
                  }}
                />
                <p className="text-gray-400 text-sm mt-3">Free Size</p>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">{t.registration.merchandise.note}</p>
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
          {t.registration.fees.notes}<br />
          {t.registration.fees.proNote}
        </div>

      </div>
    </section>
  );
};

export default Registration;