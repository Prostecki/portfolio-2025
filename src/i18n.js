import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enCommon from "./locales/en/common.json";
import svCommon from "./locales/sv/common.json";
import ruCommon from "./locales/ru/common.json";

const resources = {
  en: {
    common: enCommon,
  },
  sv: {
    common: svCommon,
  },
  ru: {
    common: ruCommon,
  },
};

i18n
  .use(LanguageDetector) // Automatic language detection
  .use(initReactI18next) // React integration
  .init({
    resources,
    fallbackLng: "en", // Default language
    defaultNS: "common", // Default namespace

    // Language detection settings
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio2025_language",
    },

    interpolation: {
      escapeValue: false, // React already protects against XSS
    },

    // Debug mode for development
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
