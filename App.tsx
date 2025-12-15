import React, { useEffect } from 'react';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Registration from './components/Registration';
import EventDetails from './components/EventDetails';
import RulesSection from './components/RulesSection';
// import Schedule from './components/Schedule';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const { language } = React.useContext(LanguageContext);

  useEffect(() => {
    // 根據語言添加 class 到 html 元素，優化字體渲染
    document.documentElement.setAttribute('lang', language === 'zh' ? 'zh-TW' : 'en');
    document.documentElement.classList.remove('lang-zh', 'lang-en');
    document.documentElement.classList.add(`lang-${language}`);
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EventDetails />
        <Registration />
        <RulesSection />
        {/* <Schedule /> */}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;