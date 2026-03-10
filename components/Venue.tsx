import React from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Venue: React.FC = () => {
  const { t } = useTranslation();
  const mapQuery = encodeURIComponent(t.venue.address);

  return (
    <section id="venue" className="bg-tko-black text-white py-24 relative overflow-hidden border-t border-white/10">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tko-green opacity-5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-tko-yellow font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4">{t.venue.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider mb-6">
            {t.venue.title}<span className="text-tko-green">{t.venue.titleHighlight}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 text-gray-300 text-lg">
            <MapPin className="text-tko-green" size={22} />
            <span>{t.venue.address}</span>
          </div>
        </div>

        {/* Map + Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Google Maps Embed */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
            <iframe
              title="比賽地點地圖"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Venue Photo */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-800">
            <img
              src="./venue/—Pngtree—run_787544.jpg"
              alt="比賽場地"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
