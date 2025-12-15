import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // 1. 如果您在本地開發，請將圖片命名為 tko-main-visual.png 並放在 public 資料夾中。
  // 2. 如果是 WordPress，請上傳媒體庫後，將這裡換成圖片網址
  // [UPDATED] Google Drive Direct Link - 使用 Google User Content CDN 連結
  const MAIN_VISUAL_SRC = "https://lh3.googleusercontent.com/d/1dNIOAUOQKVxFUp-JugvdIMxRLQPzhBlh";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-tko-black">
      
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* 2. Technical Drawing Lines (Kendama Wireframes simulation) */}
      <div className="absolute left-0 top-0 h-full w-1/4 hidden lg:block opacity-10 pointer-events-none border-r border-white/10">
         <div className="absolute top-1/4 left-1/2 w-40 h-40 border border-white rounded-full -translate-x-1/2"></div>
         <div className="absolute top-1/4 left-1/2 w-36 h-36 border border-white rounded-full -translate-x-1/2 translate-y-2"></div>
         <div className="absolute bottom-1/3 left-1/2 w-[1px] h-64 bg-white -translate-x-1/2"></div>
         <div className="absolute bottom-1/3 left-1/4 w-full h-[1px] bg-white"></div>
         {/* Technical marks */}
         <div className="absolute top-10 left-4 text-[10px] text-white font-mono">FIG. 01</div>
         <div className="absolute bottom-10 left-4 text-[10px] text-white font-mono">SIDE A - ELEVATION</div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/4 hidden lg:block opacity-10 pointer-events-none border-l border-white/10">
         <div className="absolute bottom-1/4 left-1/2 w-32 h-64 border border-white -translate-x-1/2"></div>
         <div className="absolute top-1/3 right-0 w-full h-[1px] bg-white"></div>
         <div className="absolute top-1/2 left-1/2 w-48 h-[1px] bg-white -translate-x-1/2 rotate-45"></div>
          {/* Technical marks */}
          <div className="absolute top-10 right-4 text-[10px] text-white font-mono text-right">FIG. 02</div>
          <div className="absolute bottom-10 right-4 text-[10px] text-white font-mono text-right">CROSS SECTION</div>
      </div>

      {/* 3. Main Content Layer */}
      {/* 移除了 max-w-6xl 限制，改為 w-full 讓內容可以更寬 */}
      <div className="relative z-10 text-center w-full px-4 md:px-0 mx-auto">
        <div className="animate-fade-in-up flex flex-col items-center">
            
            {/* Main Visual Image Replacement */}
            {/* 調整：移除 max-w-3xl，改為 w-full 並設定最大高度限制 */}
            <div className="mb-8 w-full flex justify-center items-center">
                <img 
                    src={MAIN_VISUAL_SRC} 
                    alt="OFFICIAL EVENT TAIWAN KENDAMA OPEN 2026 - 3/28(Sat)-3/29(Sun) Kaohsiung, Taiwan" 
                    className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                        // Fallback logic for development
                        e.currentTarget.style.display = 'none';
                        const fallback = document.getElementById('fallback-hero-text');
                        if (fallback) fallback.style.display = 'block';
                    }}
                />
            </div>

            {/* Fallback Text (Hidden unless image fails) */}
            <div id="fallback-hero-text" className="hidden mb-12">
                 <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.5em] uppercase text-tko-yellow mb-4">
                    Official Event
                </h2>
                <h1 className="text-6xl md:text-9xl font-heading font-bold text-white tracking-tighter leading-none mb-4">
                    TAIWAN<br/>KENDAMA<br/>OPEN
                </h1>
                 <p className="text-xl text-gray-400 font-medium tracking-wide">
                    3/28 (Sat) - 3/29 (Sun) • Kaohsiung, Taiwan
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mt-2 mx-auto">
                <a href="#registration" onClick={(e) => scrollToSection(e, 'registration')} className="group relative px-8 py-4 bg-tko-yellow text-tko-black font-bold text-lg uppercase tracking-widest overflow-hidden transition-all hover:bg-white clip-path-slant-right">
                    <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    <span className="relative z-10">立即報名 Register</span>
                </a>
                <a href="#rules" onClick={(e) => scrollToSection(e, 'rules')} className="px-8 py-4 border border-white/30 hover:border-tko-green text-white hover:text-tko-green font-bold text-lg uppercase tracking-widest transition-all hover:bg-white/5">
                    查看賽制 Rules
                </a>
            </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30">
        <ChevronDown size={32} />
      </div>
      
      {/* Decorative gradient at bottom - Increased height to blend better */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-tko-black via-tko-black/80 to-transparent"></div>
    </div>
  );
};

export default Hero;