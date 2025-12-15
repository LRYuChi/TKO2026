import React from 'react';
import { Target, Zap, Crown, Flame, Award, Users, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const EventDetails: React.FC = () => {
  const { t } = useTranslation();
  const categories = [
    {
      title: t.eventDetails.categories.speed.title,
      desc: t.eventDetails.categories.speed.desc,
      groups: t.eventDetails.categories.speed.groups,
      icon: <Zap className="w-6 h-6 text-tko-black" />,
      color: "bg-tko-yellow"
    },
    {
      title: t.eventDetails.categories.designated.title,
      desc: t.eventDetails.categories.designated.desc,
      groups: t.eventDetails.categories.designated.groups,
      icon: <Target className="w-6 h-6 text-white" />,
      color: "bg-tko-green"
    },
    {
      title: t.eventDetails.categories.kenGame.title,
      desc: t.eventDetails.categories.kenGame.desc,
      groups: t.eventDetails.categories.kenGame.groups,
      icon: <Crown className="w-6 h-6 text-white" />,
      color: "bg-tko-red"
    },
    {
      title: t.eventDetails.categories.freestyle.title,
      desc: t.eventDetails.categories.freestyle.desc,
      groups: t.eventDetails.categories.freestyle.groups,
      icon: <Flame className="w-6 h-6 text-white" />,
      color: "bg-white/20"
    }
  ];

  const awards = t.eventDetails.awards.items;

  return (
    <section id="details" className="py-24 bg-tko-black relative overflow-hidden scroll-mt-20">
      {/* Background Elements - Subtler for dark mode */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tko-gray rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tko-yellow rounded-full mix-blend-overlay filter blur-3xl opacity-5 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
            <span className="text-tko-green font-bold tracking-widest uppercase text-sm mb-2 block">{t.eventDetails.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tight">{t.eventDetails.title}</h2>
            <div className="flex justify-center gap-2">
                <div className="w-12 h-1 bg-tko-yellow"></div>
                <div className="w-4 h-1 bg-tko-green"></div>
                <div className="w-2 h-1 bg-tko-red"></div>
            </div>
            <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                {t.eventDetails.description}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-neutral-900/50 rounded-none border border-white/10 p-8 hover:border-tko-yellow/50 transition-colors duration-300 relative overflow-hidden hover:bg-neutral-800/50">
              <div className={`absolute top-0 left-0 w-full h-1 ${cat.color}`}></div>
              <div className={`${cat.color} w-14 h-14 flex items-center justify-center shadow-lg shadow-black/50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">{cat.title}</h3>
              <p className="text-base text-gray-300 mb-6 leading-relaxed min-h-[40px]">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.groups.map((g) => (
                  <span key={g} className="px-2 py-1 bg-white/5 text-gray-300 text-sm font-bold rounded-sm border border-white/10">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="bg-neutral-900 border border-white/10 rounded-lg relative overflow-hidden">
           {/* Decorative Lines */}
           <div className="absolute top-0 right-0 p-10 opacity-10">
                <div className="w-32 h-32 border border-white/30 rounded-full"></div>
                <div className="w-20 h-20 border border-tko-red rounded-full absolute top-6 right-6"></div>
           </div>

           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3">
              <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="inline-block p-3 bg-tko-red/20 rounded-lg mb-6">
                    <Award className="text-tko-red w-8 h-8" /> 
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-white">{t.eventDetails.awards.title}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {t.eventDetails.awards.description}
                </p>
                <div className="text-tko-yellow text-sm font-bold tracking-widest uppercase">{t.eventDetails.awards.subtitle}</div>
              </div>

              <div className="lg:col-span-2 p-10 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {awards.map((award, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="mt-1">
                            <Star className="w-5 h-5 text-tko-yellow fill-tko-yellow" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2 text-white">{award.title}</h4>
                            <p className="text-base text-gray-300 leading-relaxed">{award.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
           </div>
        </div>
        
        {/* General Rules Notice */}
        <div className="mt-16 bg-white/5 border-l-4 border-tko-green p-8 flex flex-col md:flex-row gap-6">
            <div className="shrink-0">
                 <div className="w-12 h-12 bg-tko-green/20 rounded-full flex items-center justify-center text-tko-green">
                    <Users size={24}/>
                 </div>
            </div>
            <div>
                <h4 className="text-2xl font-bold text-white mb-4">{t.eventDetails.divisionInfo.title}</h4>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {t.eventDetails.divisionInfo.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-400">
                    {t.eventDetails.divisionInfo.divisions.map((div, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${idx < 2 ? 'bg-tko-yellow' : 'bg-tko-red'}`}></span>
                        <strong>{div.name}：</strong>{div.desc}
                      </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;