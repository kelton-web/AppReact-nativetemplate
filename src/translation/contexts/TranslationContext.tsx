import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from "react-native-localize";

interface TranslationContextProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);
const LANG_STORAGE_KEY = '@app_lang';

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>("fr");

  useEffect(() => {
    const getCurrentLocale = async () => {
      const savedLang = await AsyncStorage.getItem(LANG_STORAGE_KEY);
      if (savedLang) {
        setLanguage(savedLang);
      } else {
        const currentLang = RNLocalize.getLocales()[0].languageTag === "fr" ? "fr" : "en";
        setLanguage(currentLang);
      }
    };
    getCurrentLocale();
  }, []);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem(LANG_STORAGE_KEY, lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};