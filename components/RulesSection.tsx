import React, { useState } from 'react';
import { ScrollText, Play, AlertCircle, Shield, Swords, Crown, Flame, Zap, Target, ChevronDown, User } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const RulesSection: React.FC = () => {
  const { t } = useTranslation();
  // Freestyle 已移除，獨立到下方
  const [activeTab, setActiveTab] = useState<'novice' | 'advanced' | 'ken'>('novice');

  const tabs = [
    { id: 'novice', label: t.rules.tabs.novice },
    { id: 'advanced', label: t.rules.tabs.advanced },
    { id: 'ken', label: t.rules.tabs.ken },
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
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-tko-black mb-6">{t.rules.title}</h2>
                <div className="w-24 h-1.5 bg-tko-red mx-auto mb-8"></div>
                
                {/* General Rules Box */}
                <div className="max-w-5xl mx-auto bg-gray-50 p-8 md:p-10 border-l-8 border-tko-black text-left mb-16 shadow-inner">
                    <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-3 text-tko-black uppercase tracking-wide">
                        <Shield className="w-8 h-8 text-tko-red" /> {t.rules.generalRules.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-lg md:text-xl text-gray-700 list-none font-medium">
                        {t.rules.generalRules.items.map((item, index) => (
                          <li key={index} className={`flex gap-3 ${index === t.rules.generalRules.items.length - 1 ? 'md:col-span-2' : ''}`}>
                            <span className="text-tko-red font-bold text-2xl">›</span> {item}
                          </li>
                        ))}
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
                        {t.rules.freestyle.title}
                    </h3>
                    <p className="text-gray-400 text-lg tracking-widest uppercase mt-2 font-mono">
                        {t.rules.freestyle.subtitle}
                    </p>
                </div>
            </div>

            {/* Scoring Criteria */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-neutral-900/50 p-10 border border-white/10 hover:border-tko-yellow/50 transition-colors group">
                    <div className="text-6xl font-heading font-bold text-tko-yellow mb-4 group-hover:scale-110 transition-transform origin-left">{t.rules.freestyle.scoring.creativity.percent}</div>
                    <div className="text-xl text-white font-bold uppercase tracking-widest mb-2">{t.rules.freestyle.scoring.creativity.title}</div>
                    <p className="text-gray-400 text-sm">{t.rules.freestyle.scoring.creativity.desc}</p>
                </div>
                <div className="bg-neutral-900/50 p-10 border border-white/10 hover:border-tko-green/50 transition-colors group">
                    <div className="text-6xl font-heading font-bold text-tko-green mb-4 group-hover:scale-110 transition-transform origin-left">{t.rules.freestyle.scoring.flow.percent}</div>
                    <div className="text-xl text-white font-bold uppercase tracking-widest mb-2">{t.rules.freestyle.scoring.flow.title}</div>
                    <p className="text-gray-400 text-sm">{t.rules.freestyle.scoring.flow.desc}</p>
                </div>
                <div className="bg-neutral-900/50 p-10 border border-white/10 hover:border-tko-red/50 transition-colors group">
                    <div className="text-6xl font-heading font-bold text-tko-red mb-4 group-hover:scale-110 transition-transform origin-left">{t.rules.freestyle.scoring.difficulty.percent}</div>
                    <div className="text-xl text-white font-bold uppercase tracking-widest mb-2">{t.rules.freestyle.scoring.difficulty.title}</div>
                    <p className="text-gray-400 text-sm">{t.rules.freestyle.scoring.difficulty.desc}</p>
                </div>
            </div>

            {/* Rules Format */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-gray-300 mb-24 max-w-5xl mx-auto">
                <div>
                    <h4 className="font-bold text-white text-2xl mb-6 border-l-4 border-tko-yellow pl-4 uppercase tracking-wide">{t.rules.freestyle.qualifiers.title}</h4>
                    <ul className="text-lg space-y-4 list-disc list-inside marker:text-tko-yellow">
                        {t.rules.freestyle.qualifiers.rules.map((rule, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: rule }} />
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white text-2xl mb-6 border-l-4 border-tko-green pl-4 uppercase tracking-wide">{t.rules.freestyle.finals.title}</h4>
                    <ul className="text-lg space-y-4 list-disc list-inside marker:text-tko-green">
                        {t.rules.freestyle.finals.rules.map((rule, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: rule }} />
                        ))}
                    </ul>
                </div>
            </div>

            {/* Judges Section */}
            <div className="border-t border-white/10 pt-20">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
                        {t.rules.freestyle.judges.title}
                    </h3>
                    <p className="text-gray-400">{t.rules.freestyle.judges.subtitle}</p>
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
                                    {t.rules.freestyle.judges.comingSoon}
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

const NoviceRules = () => {
    const { t } = useTranslation();
    return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Speed Rules */}
        <div className="bg-white p-8 md:p-12 border-2 border-gray-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-tko-yellow/10 rounded-bl-full"></div>
            <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="bg-tko-yellow p-4 text-tko-black"><ZapIcon /></div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase">{t.rules.noviceSpeed.title}</h3>
            </div>
            <div className="space-y-8 text-lg text-gray-700 relative z-10">
                <p><span className="font-bold bg-black text-white px-3 py-1 text-sm uppercase mr-3 align-middle">Format</span> {t.rules.noviceSpeed.format}</p>
                <div className="pl-6 border-l-4 border-tko-yellow space-y-4">
                    <p><strong>{t.rules.noviceSpeed.qualifiersLabel}</strong>{t.rules.noviceSpeed.qualifiers}</p>
                    <p><strong>{t.rules.noviceSpeed.finalsLabel}</strong>{t.rules.noviceSpeed.finals}</p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        {/* Video Area 1: Novice Speed */}
                        <VideoEmbed title={t.rules.noviceSpeed.videoNovice} videoId="mCDOfP8fDRo" />
                        
                        <h4 className="font-bold mb-6 text-tko-green uppercase tracking-wide text-lg border-b-2 border-gray-200 pb-2">{t.rules.noviceSpeed.noviceTitle}</h4>
                        <ol className="list-decimal list-inside text-xl space-y-4 text-tko-black font-medium leading-relaxed">
                            {t.rules.noviceSpeed.noviceTricks.map((trick, index) => (
                                <li key={index} className={trick.includes('▲') ? 'text-tko-red' : ''}>{trick}</li>
                            ))}
                        </ol>
                    </div>
                     <div>
                        {/* Video Area 2: Beginner Speed */}
                        <VideoEmbed title={t.rules.noviceSpeed.videoBeginner} videoId="0FqbkkM-h5g" />

                        <h4 className="font-bold mb-6 text-tko-green uppercase tracking-wide text-lg border-b-2 border-gray-200 pb-2">{t.rules.noviceSpeed.beginnerTitle}</h4>
                        <ol className="list-decimal list-inside text-xl space-y-4 text-tko-black font-medium leading-relaxed">
                            {t.rules.noviceSpeed.beginnerTricks.map((trick, index) => (
                                <li key={index} className={trick.includes('▲') ? 'text-tko-red' : ''}>{trick}</li>
                            ))}
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
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase">{t.rules.noviceDesignated.title}</h3>
            </div>
            <div className="space-y-8 text-lg text-gray-700 relative z-10">
                <p><span className="font-bold bg-black text-white px-3 py-1 text-sm uppercase mr-3 align-middle">Format</span> {t.rules.noviceDesignated.format}</p>
                <div className="pl-6 border-l-4 border-tko-green space-y-4">
                    <p><strong>{t.rules.noviceDesignated.rulesLabel}</strong>{t.rules.noviceDesignated.rules}</p>
                    <p><strong>{t.rules.noviceDesignated.finalsLabel}</strong>{t.rules.noviceDesignated.finals}</p>
                </div>

                 <details className="mt-10 bg-gray-50 p-8 border border-gray-200 cursor-pointer group transition-colors hover:bg-gray-100" open>
                    <summary className="font-bold flex justify-between items-center text-tko-black uppercase tracking-wide text-lg">
                        {t.rules.noviceDesignated.trickList} <ChevronDown className="w-6 h-6 group-open:rotate-180 transition-transform"/>
                    </summary>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t-2 border-gray-200">
                        <div>
                             {/* Video Area 3: Novice Designated */}
                             <VideoEmbed title={t.rules.noviceDesignated.videoNovice} videoId="TIZAj3uLf8A" />

                             <p className="font-bold mb-4 text-tko-green text-xl">{t.rules.noviceDesignated.noviceGroup}</p>
                             <ul className="list-none text-tko-black space-y-3 text-lg font-medium leading-relaxed">
                                {t.rules.noviceDesignated.noviceTricks.map((trick, index) => (
                                    <li key={index} className={trick.includes('▲') ? 'text-tko-red font-medium' : ''}>• {trick}</li>
                                ))}
                             </ul>
                        </div>
                        <div>
                             {/* Video Area 4: Beginner Designated */}
                             <VideoEmbed title={t.rules.noviceDesignated.videoBeginner} videoId="7nAaXEVizkg" />

                             <p className="font-bold mb-4 text-tko-green text-xl">{t.rules.noviceDesignated.beginnerGroup}</p>
                             <ul className="list-none text-tko-black space-y-3 text-lg font-medium leading-relaxed">
                                {t.rules.noviceDesignated.beginnerTricks.map((trick, index) => (
                                    <li key={index} className={trick.includes('▲') ? 'text-tko-red font-medium' : ''}>• {trick}</li>
                                ))}
                             </ul>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>
    );
};

const AdvancedRules = () => {
    const { t } = useTranslation();
    return (
     <div className="bg-white p-8 lg:p-14 border-2 border-gray-200 shadow-xl max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-3 bg-tko-red"></div>
        {/* Changed layout from flex-row to flex-col for better readability */}
        <div className="flex flex-col gap-10">
            {/* Top Section: Title & Rules */}
            <div className="w-full">
                <div className="flex items-center gap-5 mb-8">
                    <div className="bg-tko-red p-4 text-white"><SwordsIcon /></div>
                    <h3 className="text-4xl font-heading font-bold uppercase text-tko-black">{t.rules.advancedDesignated.title}</h3>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-lg text-gray-700 leading-relaxed mb-8">
                    <div>
                         <p>
                            <strong className="text-tko-black text-2xl block mb-4">{t.rules.advancedDesignated.format}</strong>
                            {t.rules.advancedDesignated.formatDesc}
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 border-l-8 border-tko-red h-fit">
                        <h4 className="font-bold text-tko-black mb-4 uppercase tracking-wide text-xl">{t.rules.advancedDesignated.finals}</h4>
                        <p className="text-gray-800 mb-2 text-xl">{t.rules.advancedDesignated.finalsDesc}</p>
                        <p className="text-gray-800 text-xl" dangerouslySetInnerHTML={{ __html: t.rules.advancedDesignated.finalScore.replace(/5/, '<span class="font-bold text-tko-red text-3xl">5</span>') }} />
                    </div>
                </div>
            </div>

            {/* Bottom Section: Trick Lists Split (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-200 pt-10">
                 {/* Left: Advanced */}
                 <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                        <VideoEmbed title={t.rules.advancedDesignated.videoAdvanced} videoId="1nD6z3gShXY" />
                        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                             <p className="font-bold text-white bg-tko-black inline-block px-5 py-2 text-base tracking-wider uppercase">{t.rules.advancedDesignated.advancedGroup}</p>
                        </div>
                        {/* Modified: Font size adjusted to text-lg, font-medium, leading-relaxed for elegance. Red text normalized. */}
                        <ul className="text-lg text-tko-black space-y-3 list-none font-medium leading-relaxed">
                            {t.rules.advancedDesignated.advancedTricks.map((trick, index) => (
                                <li key={index} className={trick.includes('▲') ? 'text-tko-red' : ''}>{index + 1}. {trick}</li>
                            ))}
                        </ul>
                 </div>
                 
                 {/* Right: Challenge */}
                 <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                        <VideoEmbed title={t.rules.advancedDesignated.videoChallenge} videoId="l1HcL9fFJLU" />
                        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                            <p className="font-bold text-white bg-tko-black inline-block px-5 py-2 text-base tracking-wider uppercase">{t.rules.advancedDesignated.challengeGroup}</p>
                        </div>
                        {/* Modified: Font size adjusted to text-lg, font-medium, leading-relaxed for elegance. Red text normalized. */}
                        <ul className="text-lg text-tko-black space-y-3 list-none font-medium leading-relaxed">
                             {t.rules.advancedDesignated.challengeTricks.map((trick, index) => (
                                <li key={index} className={trick.includes('▲') ? 'text-tko-red' : ''}>{index + 1}. {trick}</li>
                            ))}
                        </ul>
                 </div>
            </div>
        </div>
     </div>
    );
};

const KenGameRules = () => {
    const { t } = useTranslation();
    return (
    <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 border border-gray-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-tko-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex items-center gap-5 mb-12 relative z-10">
            <div className="bg-tko-red p-4 text-white"><CrownIcon /></div>
            <h3 className="text-4xl font-heading font-bold uppercase text-tko-black">{t.rules.kenGame.title}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
                 <h4 className="font-bold text-tko-black border-b-2 border-gray-100 pb-3 mb-4 uppercase tracking-wide text-lg">{t.rules.kenGame.basicRules}</h4>
                 <ul className="text-xl text-gray-800 space-y-5 list-none font-medium">
                    <li><span className="font-bold text-tko-black">{t.rules.kenGame.format}</span> {t.rules.kenGame.formatDesc}</li>
                    <li><span className="font-bold text-tko-black">{t.rules.kenGame.start}</span> {t.rules.kenGame.startDesc}</li>
                    <li><span className="font-bold text-tko-black">{t.rules.kenGame.attDef}</span> {t.rules.kenGame.attDefDesc}</li>
                    <li className="pt-4 text-tko-red font-bold text-2xl">{t.rules.kenGame.winCondition}</li>
                 </ul>
            </div>
            
            <div className="bg-gray-50 p-10 border-l-8 border-tko-red">
                <h4 className="font-bold text-tko-red mb-6 flex items-center gap-3 uppercase tracking-wide text-xl">
                    <AlertCircle size={28}/> {t.rules.kenGame.proveIt}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t.rules.kenGame.proveItDesc1}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {t.rules.kenGame.proveItDesc2}
                </p>
            </div>
        </div>
    </div>
    );
};

// Icons wrappers
const ZapIcon = () => <Zap size={36} />;
const TargetIcon = () => <Target size={36} />;
const SwordsIcon = () => <Swords size={36} />;
const CrownIcon = () => <Crown size={36} />;
const FlameIcon = () => <Flame size={36} />;
// const ChevronDownIcon = ({className}:{className?:string}) => <div className={className}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>;

export default RulesSection;