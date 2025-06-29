import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enCommon from "./locales/en/common.json";
import svCommon from "./locales/sv/common.json";

const resources = {
  en: {
    common: enCommon,
  },
  sv: {
    common: svCommon,
  },
};

i18n
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources,
    fallbackLng: "en", // Язык по умолчанию
    defaultNS: "common", // Namespace по умолчанию

    // Настройки определения языка
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio2025_language",
    },

    interpolation: {
      escapeValue: false, // React уже защищает от XSS
    },

    // Debug режим для разработки
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
