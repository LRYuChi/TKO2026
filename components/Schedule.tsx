import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import AnimatedSection from './AnimatedSection';

const Schedule: React.FC = () => {
  const { t } = useTranslation();

  const day1 = [
    { time: "10:00 - 11:00", event: t.schedule.day1.items[0] },
    { time: "11:00 - 11:05", event: t.schedule.day1.items[1] },
    { time: "11:05 - 11:20", event: t.schedule.day1.items[2] },
    { time: "11:20 - 11:40", event: t.schedule.day1.items[3] },
    { time: "11:40 - 12:30", event: t.schedule.day1.items[4] },
    { time: "13:00 - 13:20", event: t.schedule.day1.items[5] },
    { time: "13:20 - 13:50", event: t.schedule.day1.items[6] },
    { time: "13:50 - 14:30", event: t.schedule.day1.items[7] },
    { time: "14:30 - 15:10", event: t.schedule.day1.items[8] },
    { time: "15:10 - 15:30", event: t.schedule.day1.items[9] },
    { time: "15:40 - 17:00", event: t.schedule.day1.items[10] },
    { time: "17:00 - 17:15", event: t.schedule.day1.items[11] },
  ];

  const day2 = [
    { time: "10:30 - 11:00", event: t.schedule.day2.items[0] },
    { time: "11:00 - 11:20", event: t.schedule.day2.items[1] },
    { time: "11:20 - 12:00", event: t.schedule.day2.items[2] },
    { time: "12:00 - 12:20", event: t.schedule.day2.items[3] },
    { time: "13:00 - 13:15", event: t.schedule.day2.items[4] },
    { time: "13:15 - 13:30", event: t.schedule.day2.items[5] },
    { time: "13:30 - 14:10", event: t.schedule.day2.items[6] },
    { time: "14:10 - 15:00", event: t.schedule.day2.items[7] },
    { time: "15:00 - 15:20", event: t.schedule.day2.items[8] },
    { time: "15:30 - 17:00", event: t.schedule.day2.items[9] },
    { time: "17:00 - 17:20", event: t.schedule.day2.items[10] },
    { time: "17:20 - 17:30", event: t.schedule.day2.items[11] },
  ];

  return (
    <section id="schedule" className="py-24 bg-tko-black text-white relative overflow-hidden scroll-mt-20 border-t border-white/10">
      {/* Background Tech Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-2 uppercase tracking-tighter">
                {t.schedule.titleLine1}<br/><span className="text-tko-yellow">{t.schedule.titleLine2}</span>
              </h2>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-gray-400 font-mono text-sm">MARCH 2026</p>
              <p className="text-tko-green font-bold uppercase tracking-widest text-lg">Kaohsiung, Taiwan</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Day 1 */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-tko-yellow text-tko-black p-4 font-heading font-bold text-2xl skew-x-[-10deg]">
                  DAY 01
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{t.schedule.day1.subtitle}</h3>
                  <p className="text-tko-yellow font-mono text-base">3/28 (SAT)</p>
                </div>
              </div>

              <div className="space-y-0 border-l-2 border-dashed border-gray-800 ml-6">
                {day1.map((item, index) => (
                  <div key={index} className="relative pl-10 pb-10 group last:pb-0">
                    <div className="absolute left-[-5px] top-[6px] w-2.5 h-2.5 rounded-full bg-gray-800 group-hover:bg-tko-yellow transition-colors duration-300"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                      <span className="font-mono text-base text-tko-yellow font-bold w-24 shrink-0">
                        {item.time.split(' - ')[0]}
                      </span>
                      <div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-xl block sm:inline">{item.event}</span>
                        <span className="text-sm text-gray-400 block mt-1 font-mono">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Day 2 */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-tko-green text-white p-4 font-heading font-bold text-2xl skew-x-[-10deg]">
                  DAY 02
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{t.schedule.day2.subtitle}</h3>
                  <p className="text-tko-green font-mono text-base">3/29 (SUN)</p>
                </div>
              </div>

              <div className="space-y-0 border-l-2 border-dashed border-gray-800 ml-6">
                {day2.map((item, index) => (
                  <div key={index} className="relative pl-10 pb-10 group last:pb-0">
                    <div className="absolute left-[-5px] top-[6px] w-2.5 h-2.5 rounded-full bg-gray-800 group-hover:bg-tko-green transition-colors duration-300"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                      <span className="font-mono text-base text-tko-green font-bold w-24 shrink-0">
                        {item.time.split(' - ')[0]}
                      </span>
                      <div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-xl block sm:inline">{item.event}</span>
                        <span className="text-sm text-gray-400 block mt-1 font-mono">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
