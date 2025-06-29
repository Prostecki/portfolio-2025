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
      // Only detect languages that we actually support
      checkWhitelist: true,
      // Convert language codes like 'en-US' to 'en'
      convertDetectedLanguage: (lng) => {
        const supportedLanguages = ["en", "sv", "ru"];
        // Extract the base language code (e.g., 'en' from 'en-US')
        const baseLang = lng.split("-")[0];
        // Return the base language if it's supported, otherwise fallback to English
        return supportedLanguages.includes(baseLang) ? baseLang : "en";
      },
    },

    // Whitelist of supported languages
    supportedLngs: ["en", "sv", "ru"],
    // Don't use language detector for unsupported languages
    nonExplicitSupportedLngs: false,

    interpolation: {
      escapeValue: false, // React already protects against XSS
    },

    // Debug mode for development (disabled to reduce console noise)
    debug: false,
  });

export default i18n;
