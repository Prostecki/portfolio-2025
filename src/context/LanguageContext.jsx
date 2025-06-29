import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

const LANGUAGE_STORAGE_KEY = "portfolio2025_language";

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => {
    // Инициализируем из localStorage или используем текущий язык i18n
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return savedLanguage || i18n.language || "en";
    }
    return "en";
  });

  // Функция для смены языка
  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      setLanguage(lng);

      // Сохраняем в localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
      }
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  // Функция для сброса языка на английский
  const resetLanguage = async () => {
    try {
      // Очищаем localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem(LANGUAGE_STORAGE_KEY);
      }
      // Устанавливаем английский
      await i18n.changeLanguage("en");
      setLanguage("en");
    } catch (error) {
      console.error("Error resetting language:", error);
    }
  };

  // Синхронизируем состояние с i18n при изменении языка
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  // Доступные языки
  const availableLanguages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "sv", name: "Svenska", flag: "🇸🇪" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  const value = {
    language,
    changeLanguage,
    resetLanguage,
    availableLanguages,
    isLoading: !i18n.isInitialized,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
