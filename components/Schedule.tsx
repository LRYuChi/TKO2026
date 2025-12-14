import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const day1 = [
    { time: "10:00 - 11:00", event: "選手報到" },
    { time: "11:00 - 11:05", event: "比賽開幕" },
    { time: "11:05 - 11:20", event: "新手組速度賽海選 (取五強)" },
    { time: "11:20 - 11:40", event: "初階組速度賽海選 (取五強)" },
    { time: "11:40 - 12:30", event: "中遊戲：劍玉大風吹 / Ken Game" },
    { time: "13:00 - 13:20", event: "新手組指定賽海選 (取四強)" },
    { time: "13:20 - 13:50", event: "初階組指定賽海選 (取四強)" },
    { time: "13:50 - 14:30", event: "進階組指定賽海選 (取八強)" },
    { time: "14:30 - 15:10", event: "挑戰組指定賽海選 (取八強)" },
    { time: "15:10 - 15:30", event: "中遊戲：123 木頭人" },
    { time: "15:40 - 17:00", event: "Freestyle 海選 (取十六強)" },
    { time: "17:00 - 17:15", event: "小遊戲：劍玉猜猜" },
  ];

  const day2 = [
    { time: "10:30 - 11:00", event: "決賽選手報到" },
    { time: "11:00 - 11:20", event: "新手組速度賽決賽" },
    { time: "11:20 - 12:00", event: "初階組速度賽決賽 / Ken Game 決賽" },
    { time: "12:00 - 12:20", event: "中遊戲：比手畫腳" },
    { time: "13:00 - 13:15", event: "新手組指定賽決賽" },
    { time: "13:15 - 13:30", event: "初階組指定賽決賽" },
    { time: "13:30 - 14:10", event: "進階組指定賽決賽" },
    { time: "14:10 - 15:00", event: "挑戰組指定賽決賽" },
    { time: "15:00 - 15:20", event: "中遊戲：兩人三腳蠟燭爭霸" },
    { time: "15:30 - 17:00", event: "Freestyle 決賽" },
    { time: "17:00 - 17:20", event: "小遊戲：跳劍地球做到贏" },
    { time: "17:20 - 17:30", event: "頒獎 / 大合照" },
  ];

  return (
    <section id="schedule" className="py-24 bg-tko-black text-white relative overflow-hidden scroll-mt-20">
      {/* Background Tech Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
            <div>
                 <h2 className="text-4xl md:text-6xl font-heading font-bold mb-2 uppercase tracking-tighter">Event<br/><span className="text-tko-yellow">Schedule</span></h2>
            </div>
            <div className="text-right mt-4 md:mt-0">
                <p className="text-gray-400 font-mono text-sm">MARCH 2026</p>
                <p className="text-tko-green font-bold uppercase tracking-widest text-lg">Kaohsiung, Taiwan</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Day 1 */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-10">
                <div className="bg-tko-yellow text-tko-black p-4 font-heading font-bold text-2xl skew-x-[-10deg]">
                    DAY 01
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-heading text-white">QUALIFIERS 海選日</h3>
                    <p className="text-tko-yellow font-mono text-base">3/28 (SAT)</p>
                </div>
            </div>
            
            <div className="space-y-0 border-l-2 border-dashed border-gray-800 ml-6">
                {day1.map((item, index) => (
                    <div key={index} className="relative pl-10 pb-10 group last:pb-0">
                         <div className="absolute left-[-5px] top-[6px] w-2.5 h-2.5 rounded-full bg-gray-800 group-hover:bg-tko-yellow transition-colors duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                            <span className="font-mono text-base text-tko-yellow font-bold w-24 shrink-0 flex items-center gap-2">
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

          {/* Day 2 */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-10">
                 <div className="bg-tko-green text-white p-4 font-heading font-bold text-2xl skew-x-[-10deg]">
                    DAY 02
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-heading text-white">FINALS 決賽日</h3>
                    <p className="text-tko-green font-mono text-base">3/29 (SUN)</p>
                </div>
            </div>

             <div className="space-y-0 border-l-2 border-dashed border-gray-800 ml-6">
                {day2.map((item, index) => (
                    <div key={index} className="relative pl-10 pb-10 group last:pb-0">
                         <div className="absolute left-[-5px] top-[6px] w-2.5 h-2.5 rounded-full bg-gray-800 group-hover:bg-tko-green transition-colors duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                            <span className="font-mono text-base text-tko-green font-bold w-24 shrink-0 flex items-center gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default Schedule;