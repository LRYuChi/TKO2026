import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { zh } from '../locales/zh';
import { en } from '../locales/en';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const t = language === 'zh' ? zh : en;
  
  return { t, language };
};
