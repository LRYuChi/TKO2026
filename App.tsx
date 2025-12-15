import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Registration from './components/Registration';
import EventDetails from './components/EventDetails';
import RulesSection from './components/RulesSection';
// import Schedule from './components/Schedule';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans">
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
    </LanguageProvider>
  );
};

export default App;