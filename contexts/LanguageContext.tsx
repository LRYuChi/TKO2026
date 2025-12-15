import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. 檢查 localStorage
    const saved = localStorage.getItem('tko-language');
    if (saved === 'zh' || saved === 'en') return saved;
    
    // 2. 偵測瀏覽器語言
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.includes('zh') || browserLang.includes('tw')) return 'zh';
    
    // 3. 預設中文
    return 'zh';
  });

  useEffect(() => {
    localStorage.setItem('tko-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
