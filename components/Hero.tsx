import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const MAIN_VISUAL_SRC = "https://lh3.googleusercontent.com/d/1dNIOAUOQKVxFUp-JugvdIMxRLQPzhBlh";

  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 600], [0, 180]);
  const chevronOpacity = useTransform(scrollY, [0, 300], [0.3, 0]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: 'easeOut' },
        };

  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-tko-black">

      {/* 1. Background Grid Pattern with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          y: shouldReduceMotion ? 0 : gridY,
        }}
      />

      {/* 2. Technical Drawing Lines */}
      <div className="absolute left-0 top-0 h-full w-1/4 hidden lg:block opacity-10 pointer-events-none border-r border-white/10">
        <div className="absolute top-1/4 left-1/2 w-40 h-40 border border-white rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/4 left-1/2 w-36 h-36 border border-white rounded-full -translate-x-1/2 translate-y-2"></div>
        <div className="absolute bottom-1/3 left-1/2 w-[1px] h-64 bg-white -translate-x-1/2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-full h-[1px] bg-white"></div>
        <div className="absolute top-10 left-4 text-[10px] text-white font-mono">FIG. 01</div>
        <div className="absolute bottom-10 left-4 text-[10px] text-white font-mono">SIDE A - ELEVATION</div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/4 hidden lg:block opacity-10 pointer-events-none border-l border-white/10">
        <div className="absolute bottom-1/4 left-1/2 w-32 h-64 border border-white -translate-x-1/2"></div>
        <div className="absolute top-1/3 right-0 w-full h-[1px] bg-white"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-[1px] bg-white -translate-x-1/2 rotate-45"></div>
        <div className="absolute top-10 right-4 text-[10px] text-white font-mono text-right">FIG. 02</div>
        <div className="absolute bottom-10 right-4 text-[10px] text-white font-mono text-right">CROSS SECTION</div>
      </div>

      {/* 3. Main Content Layer */}
      <div className="relative z-10 text-center w-full px-4 md:px-0 mx-auto">
        <div className="flex flex-col items-center">

          {/* Main Visual Image */}
          <motion.div className="mb-8 w-full flex justify-center items-center" {...fadeUp(0)}>
            <img
              src={MAIN_VISUAL_SRC}
              alt="OFFICIAL EVENT TAIWAN KENDAMA OPEN 2026 - 3/28(Sat)-3/29(Sun) Kaohsiung, Taiwan"
              className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('fallback-hero-text');
                if (fallback) fallback.style.display = 'block';
              }}
            />
          </motion.div>

          {/* Event Date Banner */}
          <motion.div
            className="mb-8 py-4 px-8 bg-tko-yellow/10 backdrop-blur-sm border-2 border-tko-yellow inline-block shadow-[0_0_20px_rgba(255,155,36,0.3)]"
            {...fadeUp(0.3)}
          >
            <p className="text-tko-yellow text-xl md:text-2xl font-bold tracking-wider text-center">
              {t.hero.eventDate.dates}
            </p>
            <p className="text-white/80 text-sm md:text-base font-medium tracking-wide text-center mt-1">
              {t.hero.eventDate.location}
            </p>
          </motion.div>

          {/* Fallback Text */}
          <div id="fallback-hero-text" className="hidden mb-12">
            <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.5em] uppercase text-tko-yellow mb-4">
              Official Event
            </h2>
            <h1 className="text-6xl md:text-9xl font-heading font-bold text-white tracking-tighter leading-none mb-4">
              TAIWAN<br />KENDAMA<br />OPEN
            </h1>
            <p className="text-xl text-gray-400 font-medium tracking-wide">
              3/28 (Sat) - 3/29 (Sun) • Kaohsiung, Taiwan
            </p>
          </div>

          {/* Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mt-2 mx-auto" {...fadeUp(0.6)}>
            <a href="#registration" onClick={(e) => scrollToSection(e, 'registration')} className="group relative px-8 py-4 bg-tko-yellow text-tko-black font-bold text-lg uppercase tracking-widest overflow-hidden transition-all hover:bg-white">
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10">{t.nav.registerNow}</span>
            </a>
            <a href="#rules" onClick={(e) => scrollToSection(e, 'rules')} className="px-8 py-4 border border-white/30 hover:border-tko-green text-white hover:text-tko-green font-bold text-lg uppercase tracking-widest transition-all hover:bg-white/5">
              {t.nav.rules}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30"
        style={{ opacity: shouldReduceMotion ? 0.3 : chevronOpacity }}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-tko-black via-tko-black/80 to-transparent"></div>
    </div>
  );
};

export default Hero;
