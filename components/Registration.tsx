import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-24 bg-tko-black scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-tko-red font-bold tracking-widest uppercase text-sm">Join the Battle</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">報名資訊</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            預計一月初開放 Google 表單報名。學生持有效證件可享優惠折扣。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Option 1 */}
          <div className="bg-neutral-900 p-8 flex flex-col border border-white/10 hover:border-white transition-all duration-300 shadow-sm hover:shadow-glow">
            <div className="mb-4">
              <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Entry Level</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">純報名比賽</h3>
            <div className="text-4xl font-heading font-bold text-white mb-6">NT$1,500</div>
            <ul className="space-y-4 mb-8 flex-grow border-t border-white/10 pt-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-green mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">參賽資格</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-green mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">活動貼紙</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-green mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">精美周邊小物</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest transition-colors">
              即將開放
            </button>
          </div>

          {/* Option 2 (Highlighted) */}
          <div className="bg-tko-yellow p-8 flex flex-col transform md:-translate-y-4 shadow-2xl relative">
             <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">Most Popular</div>
            <div className="mb-4">
              <span className="text-black/60 text-sm font-bold uppercase tracking-widest">Value Pack</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-black mb-2">比賽 + 毛巾/衣服</h3>
            <div className="text-4xl font-heading font-bold text-black mb-1">
                Coming Soon
            </div>
             <div className="text-sm text-black/60 mb-6 uppercase tracking-wide">Price TBD</div>
            <ul className="space-y-4 mb-8 flex-grow border-t border-black/10 pt-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-black/80 text-base">包含所有基本方案內容</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-black/80 text-base">TKO 限定運動毛巾</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-black/80 text-base">或 紀念T-shirt (二擇一)</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-black hover:bg-neutral-800 text-tko-yellow font-bold uppercase tracking-widest transition-colors">
              即將開放
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-neutral-900 p-8 flex flex-col border border-white/10 hover:border-tko-red transition-all duration-300 shadow-sm hover:shadow-glow-red">
            <div className="mb-4">
              <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Full Gear</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">大全配</h3>
            <div className="text-4xl font-heading font-bold text-tko-red mb-1">Coming Soon</div>
             <div className="text-sm text-gray-500 mb-6 uppercase tracking-wide">Price TBD</div>
            <ul className="space-y-4 mb-8 flex-grow border-t border-white/10 pt-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-red mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">包含所有基本方案內容</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-red mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">TKO 限定運動毛巾</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-red mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">TKO 紀念T-shirt</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tko-red mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-base">最完整的賽事紀念</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-white/10 hover:bg-tko-red text-white hover:text-white font-bold uppercase tracking-widest transition-colors">
              即將開放
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-neutral-900 px-8 py-4 border border-tko-yellow shadow-[4px_4px_0px_0px_#FF9B24]">
                <span className="text-3xl">🎓</span>
                <div className="text-left">
                    <div className="text-white font-bold text-base uppercase tracking-wide">Student Discount</div>
                    <div className="text-base text-gray-400">持有效學生證報名可折抵 <span className="font-bold text-tko-red">NT$500</span> (比賽當天簽到時須出示)</div>
                </div>
            </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400 font-mono">
            ＊各組別說明：新手、初階、進階、挑戰組不可重複報名。<br/>
            Freestyle PRO 組如人數不足 8 位，則取消 PRO 組，並編列進公開組一起比賽。
        </div>

      </div>
    </section>
  );
};

export default Registration;