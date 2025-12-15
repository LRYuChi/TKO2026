import React, { useState } from 'react';
import { ScrollText, Play, AlertCircle, Shield, Swords, Crown, Flame, Zap, Target, ChevronDown, User } from 'lucide-react';

const RulesSection: React.FC = () => {
  // Freestyle 已移除，獨立到下方
  const [activeTab, setActiveTab] = useState<'novice' | 'advanced' | 'ken'>('novice');

  const tabs = [
    { id: 'novice', label: '新手/初階組' },
    { id: 'advanced', label: '進階/挑戰組' },
    { id: 'ken', label: 'Ken Game' },
  ];

  return (
    <div id="rules" className="scroll-mt-20">
      
      {/* ================= SECTION 1: Standard Rules (White Background) ================= */}
      <section className="bg-white relative pb-20">
        
        {/* Visual Transition from Dark to Light */}
        <div className="w-full h-16 bg-tko-black relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-full h-full bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-tko-black mb-6">賽制與規則</h2>
                <div className="w-24 h-1.5 bg-tko-red mx-auto mb-8"></div>
                
                {/* General Rules Box */}
                <div className="max-w-5xl mx-auto bg-gray-50 p-8 md:p-10 border-l-8 border-tko-black text-left mb-16 shadow-inner">
                    <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-3 text-tko-black uppercase tracking-wide">
                        <Shield className="w-8 h-8 text-tko-red" /> General Rules 通用規範
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-lg md:text-xl text-gray-700 list-none font-medium">
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 不得用非慣用手碰觸球或劍及調整線。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 平衡招式慣用手不得碰手（燈台月面不碰劍；鶯極意不碰球）。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 可使用 Insta 收劍技巧。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 若被判定違規，該招式失敗。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 結尾若為「收劍」招式，不限制收劍方式。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 天中殺：劍尖必須明顯朝下，依裁判判決為主。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 若未特別指定，旋轉方向（正逆迴旋）沒有任何限制。</li>
                        <li className="flex gap-3"><span className="text-tko-red font-bold text-2xl">›</span> 若未特別指定，劍玉的持法沒有任何限制。</li>
                        <li className="flex gap-3 md:col-span-2"><span className="text-tko-red font-bold text-2xl">›</span> 一周系招式，小皿、大皿順序不限；如招式包含中皿，必須以中皿為最後動作。</li>
                    </ul>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex flex-wrap justify-center gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-8 py-5 text-lg md:text-xl font-heading font-bold uppercase tracking-wider border-2 transition-all ${
                                activeTab === tab.id 
                                ? 'bg-tko-black text-white border-tko-black shadow-[6px_6px_0px_0px_#FF9B24]' 
                                : 'bg-white text-gray-500 border-gray-200 hover:border-tko-black hover:text-tko-black'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content Area */}
            <div className="animate-fade-in min-h-[400px]">
                {activeTab === 'novice' && <NoviceRules />}
                {activeTab === 'advanced' && <AdvancedRules />}
                {activeTab === 'ken' && <KenGameRules />}
            </div>
        </div>
      </section>

      {/* ================= SECTION 2: Freestyle & Judges (Dark Background) ================= */}
      <section className="bg-tko-black text-white py-24 relative overflow-hidden border-t border-white/10">
         {/* Background Decoration */}
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tko-yellow opacity-5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-tko-red opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Freestyle Header */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 text-center md:text-left">
                <div className="bg-white text-tko-black p-5 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <FlameIcon />
                </div>
                <div>
                    <h3 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight text-white">
                        Freestyle <span className="text-tko-yellow">BATTLE</span>
                    </h3>
                    <p className="text-gray-400 text-lg tracking-widest uppercase mt-2 font-mono">
                        公開組 / PRO組
                    </p>
                </div>
            </div>

            {/* Scoring Criteria */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-neutral-900/50 p-10 border border-white/10 hover:border-tko-yellow/50 transition-colors group">
                    <div className="text-6xl font-heading font-bold text-tko-yellow mb-4 group-hover:scale-110 transition-transform origin-left">30%</div>
                    <div className="text-xl text-white font-bold uppercase tracking-widest mb-2">Creativity 創意</div>
                    <p className="text-gray-400 text-sm">招式的獨創性與新穎程度。</p>
                </div>
                <div className="bg-neutral-900/50 p-10 border border-white/10 hover:border-tko-green/50 transition-colors group">
                    <div className="text-6xl font-heading font-bold text-tko-green mb-4 group-hover:scale-110 transition-transform origin-left">40%</div>
                    <div className="text-xl text-white font-bold uppercase tracking-widest mb-2">Flow 流暢度</div>
                    <p className="text-gray-400 text-sm">動作連接的順暢度與失誤率控制。</p>
                </div>
                <div className="bg-neutral-900/50 p-10 border border-white/10 hover:border-tko-red/50 transition-colors group">
                    <div className="text-6xl font-heading font-bold text-tko-red mb-4 group-hover:scale-110 transition-transform origin-left">30%</div>
                    <div className="text-xl text-white font-bold uppercase tracking-widest mb-2">Difficulty 難度</div>
                    <p className="text-gray-400 text-sm">招式的技術含量與複雜程度。</p>
                </div>
            </div>

            {/* Rules Format */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-gray-300 mb-24 max-w-5xl mx-auto">
                <div>
                    <h4 className="font-bold text-white text-2xl mb-6 border-l-4 border-tko-yellow pl-4 uppercase tracking-wide">海選階段 Qualifiers</h4>
                    <ul className="text-lg space-y-4 list-disc list-inside marker:text-tko-yellow">
                        <li>每人 <strong className="text-white">60 秒</strong> Freestyle。</li>
                        <li>依序上台，三位裁判綜合評分。</li>
                        <li>取總分最高前 16 名晉級決賽。</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white text-2xl mb-6 border-l-4 border-tko-green pl-4 uppercase tracking-wide">決賽階段 Finals</h4>
                    <ul className="text-lg space-y-4 list-disc list-inside marker:text-tko-green">
                        <li>16 強採抽籤決定 1v1 對戰組合。</li>
                        <li>雙方各進行 <strong className="text-white">兩輪</strong>，每輪 <strong className="text-white">45 秒</strong>。</li>
                        <li>場地分藍色與橘色對戰區。</li>
                        <li>裁判綜合評分，舉旗直接判定優勝者。</li>
                    </ul>
                </div>
            </div>

            {/* Judges Section */}
            <div className="border-t border-white/10 pt-20">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
                        Judges <span className="text-tko-yellow">裁判陣容</span>
                    </h3>
                    <p className="text-gray-400">由三位資深劍玉玩家擔任評審，名單即將公佈。</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="group relative">
                             {/* Card Frame */}
                            <div className="aspect-[3/4] bg-neutral-800 rounded-lg border-2 border-dashed border-white/20 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-tko-yellow group-hover:bg-neutral-800/80 transition-all duration-300">
                                
                                {/* Placeholder Icon */}
                                <div className="bg-neutral-900 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <User className="w-16 h-16 text-gray-600 group-hover:text-tko-yellow transition-colors" />
                                </div>
                                
                                {/* Text */}
                                <span className="text-gray-500 font-heading font-bold text-xl uppercase tracking-widest group-hover:text-white transition-colors">
                                    Coming Soon
                                </span>
                                
                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-tko-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                            
                            {/* Name Label Placeholder */}
                            <div className="mt-4 text-center opacity-50">
                                <div className="h-2 w-16 bg-gray-700 mx-auto rounded mb-2"></div>
                                <div className="h-2 w-24 bg-gray-700 mx-auto rounded"></div>
                            </div>
                        </div>
                     ))}
                </div>
            </div>

         </div>
      </section>
    </div>
  );
};

// --- Helper Components ---

// Video Embed Component (Unchanged)
const VideoEmbed = ({ videoId, title }: { videoId?: string; title: string }) => (
    <div className="mb-6 rounded-none overflow-hidden border-2 border-tko-black bg-black relative group shadow-md">
      <div className="aspect-video w-full relative">
        {videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
           <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-gray-500 flex-col gap-2">
               <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center group-hover:border-tko-yellow group-hover:text-tko-yellow transition-colors">
                    <Play size={24} className="ml-1" />
               </div>
               <span className="font-mono text-xs uppercase tracking-widest mt-2 group-hover:text-white">Video Coming Soon</span>
           </div>
        )}
      </div>
      <div className="bg-tko-black text-white text-xs font-bold px-3 py-1 absolute top-0 left-0 uppercase tracking-widest border-br border-b border-r border-white/20">
          {title}
      </div>
    </div>
);

const NoviceRules = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Speed Rules */}
        <div className="bg-white p-8 md:p-12 border-2 border-gray-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-tko-yellow/10 rounded-bl-full"></div>
            <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="bg-tko-yellow p-4 text-tko-black"><ZapIcon /></div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase">速度賽 (Speed)</h3>
            </div>
            <div className="space-y-8 text-lg text-gray-700 relative z-10">
                <p><span className="font-bold bg-black text-white px-3 py-1 text-sm uppercase mr-3 align-middle">Format</span> 取前三名 + 海選最速獎</p>
                <div className="pl-6 border-l-4 border-tko-yellow space-y-4">
                    <p><strong>海選：</strong>抽出「每招需成功次數」，選手依序做招，限時 2 分鐘。取用時最短前五名。</p>
                    <p><strong>決賽：</strong>加入「▲ 符號招式」為最後一招。五強上台競速，前兩名進冠亞。冠亞背對背競速。</p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        {/* Video Area 1: Novice Speed */}
                        <VideoEmbed title="新手速度賽示範" videoId="mCDOfP8fDRo" />
                        
                        <h4 className="font-bold mb-6 text-tko-green uppercase tracking-wide text-lg border-b-2 border-gray-200 pb-2">新手組招式</h4>
                        <ol className="list-decimal list-inside text-xl space-y-4 text-tko-black font-medium leading-relaxed">
                            <li>簡單止劍 - 螺旋丸</li>
                            <li>蠟燭</li>
                            <li>簡單大皿 - 棒球接中皿</li>
                            <li className="text-tko-red">▲ 止劍</li>
                        </ol>
                    </div>
                     <div>
                        {/* Video Area 2: Beginner Speed */}
                        <VideoEmbed title="初階速度賽示範" videoId="0FqbkkM-h5g" />

                        <h4 className="font-bold mb-6 text-tko-green uppercase tracking-wide text-lg border-b-2 border-gray-200 pb-2">初階組招式</h4>
                        <ol className="list-decimal list-inside text-xl space-y-4 text-tko-black font-medium leading-relaxed">
                            <li>天地二段</li>
                            <li>直拉月面 - 收劍</li>
                            <li>大鶯 - 收劍</li>
                            <li className="text-tko-red">▲ 簡單止劍 - 逆地球</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        {/* Designated Rules */}
        <div className="bg-white p-8 md:p-12 border-2 border-gray-200 shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-tko-green/10 rounded-bl-full"></div>
            <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="bg-tko-green p-4 text-white"><TargetIcon /></div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase">指定賽 (OPEN)</h3>
            </div>
            <div className="space-y-8 text-lg text-gray-700 relative z-10">
                <p><span className="font-bold bg-black text-white px-3 py-1 text-sm uppercase mr-3 align-middle">Format</span> 1 對 1 對戰 (海選樹狀圖)</p>
                <div className="pl-6 border-l-4 border-tko-green space-y-4">
                    <p><strong>規則：</strong>轉劍玉決定先後。流程為：A選招，A進行(3次機會)，若A成功且B失敗則A得1分；皆成功或皆失敗則輪換B選招。先得3分者勝出。</p>
                    <p><strong>決賽：</strong>加入「▲ 符號」招式 (新手10招/初階12招)。冠亞賽先得5分勝。</p>
                </div>

                 <details className="mt-10 bg-gray-50 p-8 border border-gray-200 cursor-pointer group transition-colors hover:bg-gray-100" open>
                    <summary className="font-bold flex justify-between items-center text-tko-black uppercase tracking-wide text-lg">
                        指定賽招式列表 (點擊收合) <ChevronDown className="w-6 h-6 group-open:rotate-180 transition-transform"/>
                    </summary>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t-2 border-gray-200">
                        <div>
                             {/* Video Area 3: Novice Designated */}
                             <VideoEmbed title="新手指定賽示範" videoId="TIZAj3uLf8A" />

                             <p className="font-bold mb-4 text-tko-green text-xl">新手組</p>
                             <ul className="list-none text-tko-black space-y-3 text-lg font-medium leading-relaxed">
                                <li>• 非慣用手殺手中皿</li>
                                <li>• 飛行機</li>
                                <li>• 止劍</li>
                                <li>• 大皿 - 膝蓋大皿</li>
                                <li>• 空中飛人</li>
                                <li>• 簡單止劍 - 螺旋丸止劍</li>
                                <li>• 簡單大鶯 - 收劍</li>
                                <li>• (止劍狀態) 抽線接劍</li>
                                <li>• 重力機快手止劍</li>
                                <li>• 招財貓收劍</li>
                                <li className="text-tko-red font-medium">• ▲ 天中殺</li>
                             </ul>
                        </div>
                        <div>
                             {/* Video Area 4: Beginner Designated */}
                             <VideoEmbed title="初階指定賽示範" videoId="7nAaXEVizkg" />

                             <p className="font-bold mb-4 text-tko-green text-xl">初階組</p>
                             <ul className="list-none text-tko-black space-y-3 text-lg font-medium leading-relaxed">
                                <li>• 歐洲一周</li>
                                <li>• 月面 - 一迴旋收</li>
                                <li>• 大皿 - 茶壺 - 收劍</li>
                                <li>• 飛行機 - 中皿 - 天中殺</li>
                                <li>• 小鶯 - 地球收</li>
                                <li>• 小指止劍 - 收劍</li>
                                <li>• 大皿撈金魚 - 收劍</li>
                                <li>• 燈台 - 抓劍收</li>
                                <li className="text-tko-red font-medium">• ▲ 殺手手勢皿一周(免收)</li>
                                <li className="text-tko-red font-medium">• ▲ 竹馬 - 收劍</li>
                                <li className="text-tko-red font-medium">• ▲ 逆飛行球 - 地球</li>
                             </ul>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>
);

const AdvancedRules = () => (
     <div className="bg-white p-8 lg:p-14 border-2 border-gray-200 shadow-xl max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-3 bg-tko-red"></div>
        {/* Changed layout from flex-row to flex-col for better readability */}
        <div className="flex flex-col gap-10">
            {/* Top Section: Title & Rules */}
            <div className="w-full">
                <div className="flex items-center gap-5 mb-8">
                    <div className="bg-tko-red p-4 text-white"><SwordsIcon /></div>
                    <h3 className="text-4xl font-heading font-bold uppercase text-tko-black">進階/挑戰組 指定賽</h3>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-lg text-gray-700 leading-relaxed mb-8">
                    <div>
                         <p>
                            <strong className="text-tko-black text-2xl block mb-4">賽制流程</strong>
                            1 對 1 對戰。海選多組同時進行。
                            轉劍玉決定先後，優先者從主辦方指定招式中抽一招。
                            規則同初階組：三次機會，先成功者得分。先得 3 分勝出。
                            若招式抽完平手，全部重抽，先得1分勝。
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 border-l-8 border-tko-red h-fit">
                        <h4 className="font-bold text-tko-black mb-4 uppercase tracking-wide text-xl">決賽階段 (Finals)</h4>
                        <p className="text-gray-800 mb-2 text-xl">需加入 ▲ 符號招式 (總共進階13招/挑戰13招)。</p>
                        <p className="text-gray-800 text-xl">冠亞軍決賽賽制為先獲得 <span className="font-bold text-tko-red text-3xl">5 分</span> 勝出。</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Trick Lists Split (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-200 pt-10">
                 {/* Left: Advanced */}
                 <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                        <VideoEmbed title="進階指定賽示範" videoId="1nD6z3gShXY" />
                        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                             <p className="font-bold text-white bg-tko-black inline-block px-5 py-2 text-base tracking-wider uppercase">進階組 Advanced</p>
                        </div>
                        {/* Modified: Font size adjusted to text-lg, font-medium, leading-relaxed for elegance. Red text normalized. */}
                        <ul className="text-lg text-tko-black space-y-3 list-none font-medium leading-relaxed">
                            <li>1. 非慣用手重力機快手止劍</li>
                            <li>2. 歐洲鶯</li>
                            <li>3. 兩圈跳劍殺快手</li>
                            <li>4. 圓月殺法放燈 - 收劍</li>
                            <li>5. 竹馬渡玉 - 一迴旋收</li>
                            <li>6. 逆一迴旋月面 - 月上月 - 逆一迴旋收</li>
                            <li>7. 殺手中皿極意 - 收劍</li>
                            <li>8. 丹麥一周</li>
                            <li>9. 兩圈離轉地球</li>
                            <li>10. 拋接二迴旋燈台 - 1.5 Cush in</li>
                            <li className="text-tko-red">▲ 飛行機 - tap 逆一迴旋 in - 一迴旋 Cush in</li>
                            <li className="text-tko-red">▲ 蠟燭 - 離轉蠟燭 - 止劍</li>
                            <li className="text-tko-red">▲ 轉劍 late 轉劍止劍</li>
                        </ul>
                 </div>
                 
                 {/* Right: Challenge */}
                 <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                        <VideoEmbed title="挑戰組指定賽示範" videoId="l1HcL9fFJLU" />
                        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                            <p className="font-bold text-white bg-tko-black inline-block px-5 py-2 text-base tracking-wider uppercase">挑戰組 Challenge</p>
                        </div>
                        {/* Modified: Font size adjusted to text-lg, font-medium, leading-relaxed for elegance. Red text normalized. */}
                        <ul className="text-lg text-tko-black space-y-3 list-none font-medium leading-relaxed">
                             <li>1. 三圈跳劍</li>
                            <li>2. 逆月面 - 3 tap 一迴旋逆月 - 止劍</li>
                            <li>3. 拉二迴旋轉劍 兩圈 拋一迴旋飛行機</li>
                            <li>4. 非慣用手離轉地球</li>
                            <li>5. 逆 juggle ghost juggle 正 juggle 止劍</li>
                            <li>6. 中皿極意 - 太陽極意 - 大鶯 - 小鶯 - 收劍</li>
                            <li>7. 直拉夢幻小竹馬 - 夢幻馬上馬 - 抓劍收</li>
                            <li>8. 直拉 tap 正一迴旋飛行機 - 0.5 tap 正一迴旋 in</li>
                            <li>9. 一迴旋重力機 - 一迴旋重力機快手止劍</li>
                            <li>10. 一迴旋燈台 - 逆燈上燈 insta juggle 燈台 insta 逆一迴旋收</li>
                            <li className="text-tko-red">▲ 轉劍 juggle 轉劍止劍</li>
                            <li className="text-tko-red">▲ 離轉 兩圈 juggle 2 tap juggle 止劍</li>
                            <li className="text-tko-red">▲ 月面 - 月上月 1 2 3 - 收劍</li>
                        </ul>
                 </div>
            </div>
        </div>
     </div>
);

const KenGameRules = () => (
    <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 border border-gray-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-tko-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex items-center gap-5 mb-12 relative z-10">
            <div className="bg-tko-red p-4 text-white"><CrownIcon /></div>
            <h3 className="text-4xl font-heading font-bold uppercase text-tko-black">Ken Game 公開賽</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
                 <h4 className="font-bold text-tko-black border-b-2 border-gray-100 pb-3 mb-4 uppercase tracking-wide text-lg">基本規則</h4>
                 <ul className="text-xl text-gray-800 space-y-5 list-none font-medium">
                    <li><span className="font-bold text-tko-black">Format:</span> 1 v 1 樹狀圖對戰。</li>
                    <li><span className="font-bold text-tko-black">Start:</span> 轉劍玉決定誰先出招。</li>
                    <li><span className="font-bold text-tko-black">Att/Def:</span> 每人有一次出招機會、兩次跟招機會。</li>
                    <li className="pt-4 text-tko-red font-bold text-2xl">先拿到 ”K”、”E”、”N” 三個字母的選手落敗。</li>
                 </ul>
            </div>
            
            <div className="bg-gray-50 p-10 border-l-8 border-tko-red">
                <h4 className="font-bold text-tko-red mb-6 flex items-center gap-3 uppercase tracking-wide text-xl">
                    <AlertCircle size={28}/> Prove it! Rule
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    當 A 賽點時，B 兩次跟招皆失敗，B 可選擇喊 "Prove it!" (限一次) 或做第三次。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    若喊 "Prove it!"，A 須重做該招。A 成功則贏；A 失敗則無人失分，換 B 出招。
                </p>
            </div>
        </div>
    </div>
);

// Icons wrappers
const ZapIcon = () => <Zap size={36} />;
const TargetIcon = () => <Target size={36} />;
const SwordsIcon = () => <Swords size={36} />;
const CrownIcon = () => <Crown size={36} />;
const FlameIcon = () => <Flame size={36} />;
// const ChevronDownIcon = ({className}:{className?:string}) => <div className={className}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>;

export default RulesSection;