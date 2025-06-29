import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage, availableLanguages } = useLanguage();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const currentLanguage = availableLanguages.find(
    (lang) => lang.code === language
  );

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = async (langCode) => {
    await changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors duration-200 border border-gray-300/20 dark:border-gray-600/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <GlobeAltIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 min-w-[140px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden z-50"
          >
            {availableLanguages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                  language === lang.code
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="text-xs opacity-60">
                    {lang.code.toUpperCase()}
                  </span>
                </div>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
