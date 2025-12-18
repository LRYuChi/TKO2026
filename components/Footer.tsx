import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  // 同步更新 Footer 的 Logo
  const LOGO_SRC = "https://lh3.googleusercontent.com/d/17pdbWsG9ZXzfpXo-UmR04dmvrc4pQy6M"; 

  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            
            {/* Footer Logo Image */}
            <img 
                src={LOGO_SRC} 
                alt="TKO Logo" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   // 如果圖片掛了，顯示下方的文字標題
                   const textTitle = document.getElementById('footer-text-title');
                   if (textTitle) textTitle.style.display = 'block';
                }}
            />
            
            {/* Fallback Text */}
            <div id="footer-text-title" className="hidden">
                 <h3 className="text-3xl font-heading font-bold mb-2 tracking-tighter">TKO <span className="text-tko-yellow">2026</span></h3>
            </div>

            <p className="text-sm text-gray-500 font-mono tracking-widest uppercase">{t.footer.subtitle}</p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://www.instagram.com/twkendamaopen/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tko-yellow transition-colors"><Instagram size={28} /></a>
            <a href="https://www.facebook.com/profile.php?id=61584467373517" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Facebook size={28} /></a>
            <a href="#" className="text-gray-500 hover:text-tko-green transition-colors"><Mail size={28} /></a>
          </div>

          <div className="text-center md:text-right text-sm text-gray-600 font-mono">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;