import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Logo 圖片連結
  const LOGO_SRC = "https://lh3.googleusercontent.com/d/17pdbWsG9ZXzfpXo-UmR04dmvrc4pQy6M"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  const navLinks = [
    { name: t.nav.details, id: 'details' },
    { name: t.nav.registration, id: 'registration' },
    { name: t.nav.rules, id: 'rules' },
    // { name: t.nav.schedule, id: 'schedule' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-tko-black/95 backdrop-blur-md shadow-md py-2 border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 將 h-16 改為 min-h，讓較大的 Logo 不會被裁切 */}
        <div className="flex justify-between items-center min-h-[64px]">
          <div className="flex-shrink-0 flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            
            {/* Logo Image - 加大尺寸 */}
            <img 
                src={LOGO_SRC} 
                alt="TAIWAN KENDAMA OPEN" 
                className="h-20 md:h-28 w-auto object-contain drop-shadow-md"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />

            {/* Restored Text Logo - 保留並顯示文字 */}
            <div className="flex flex-col justify-center">
                 <span className={`font-heading font-bold text-xl md:text-3xl tracking-tighter leading-none text-white`}>
                  TAIWAN <span className="text-tko-yellow">KENDAMA</span> OPEN
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase hidden sm:block">
                    Official Event 2026
                </span>
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 hover:text-tko-yellow ${
                  isScrolled ? 'text-gray-300' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-200 flex items-center gap-2 hover:text-tko-yellow ${
                isScrolled ? 'text-gray-300' : 'text-white/90'
              }`}
              title="Switch Language"
            >
              <Globe size={16} />
              <span>{language === 'zh' ? 'EN' : '華'}</span>
            </button>
            
            <a
              href="#registration"
              onClick={(e) => scrollToSection(e, 'registration')}
              className="px-6 py-2 bg-tko-green hover:bg-green-700 text-white text-sm font-bold tracking-widest uppercase skew-x-[-10deg] transition-all transform hover:translate-y-[-2px] border-l-4 border-tko-yellow"
            >
              <span className="block skew-x-[10deg]">{t.nav.registerNow}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-tko-black absolute w-full shadow-xl border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="block px-3 py-4 text-base font-bold text-gray-300 hover:text-tko-yellow hover:bg-white/5 border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-4 text-base font-bold text-gray-300 hover:text-tko-yellow hover:bg-white/5 border-b border-white/5"
              title="Switch Language"
            >
              <Globe size={18} />
              <span>{language === 'zh' ? 'EN' : '華'}</span>
            </button>
            <div className="pt-4">
               <a
                href="#registration"
                onClick={(e) => scrollToSection(e, 'registration')}
                className="block w-full text-center px-5 py-4 bg-tko-green text-white text-base font-bold hover:bg-green-700 uppercase tracking-widest"
              >
                {t.nav.registerNow}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;