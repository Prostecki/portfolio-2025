import { useState, useRef, useEffect, useContext } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineSettingsBrightness,
} from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header({ scrollTo }) {
  // Get both theme and actualTheme from context
  const { theme, setTheme, actualTheme } = useContext(ThemeContext);
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMobileThemeMenuOpen, setIsMobileThemeMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const themeMenuRef = useRef(null);
  const mobileThemeMenuRef = useRef(null);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolledNow = latest > 100;

    if (isScrolledNow !== isScrolled) setIsScrolled(isScrolledNow);

    lastScrollY.current = latest;
  });

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: t("navigation.home"), ref: scrollTo.homeRef },
    { label: t("navigation.about"), ref: scrollTo.aboutRef },
    { label: t("navigation.experience"), ref: scrollTo.experienceRef },
    { label: t("navigation.skills"), ref: scrollTo.techStackRef },
    { label: t("navigation.projects"), ref: scrollTo.projectsRef },
    { label: t("navigation.contact"), ref: scrollTo.getInTouchRef },
  ];

  const themeOptions = [
    {
      label: t("theme.light"),
      value: "light",
      icon: <MdOutlineLightMode size={18} />,
    },
    {
      label: t("theme.dark"),
      value: "dark",
      icon: <MdOutlineDarkMode size={18} />,
    },
    {
      label: t("theme.system"),
      value: "system",
      icon: <MdOutlineSettingsBrightness size={18} />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (
        isThemeMenuOpen &&
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target)
      ) {
        setIsThemeMenuOpen(false);
      }
      if (
        isMobileThemeMenuOpen &&
        mobileThemeMenuRef.current &&
        !mobileThemeMenuRef.current.contains(event.target)
      ) {
        setIsMobileThemeMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, isThemeMenuOpen, isMobileThemeMenuOpen]);

  return (
    <motion.header
      className="h-[72px] flex justify-center max-md:justify-between items-center fixed md:top-5 left-0 right-0 mx-auto w-full md:max-w-3xl md:w-11/12 z-50 drop-shadow-md backdrop-blur-md md:rounded-full md:border transition-colors duration-300 px-4 border-gray-300 dark:border-gray-800"
      initial={{ y: -150 }}
      animate={{
        y: 0,
        boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.1)" : "none",
        backgroundColor: isScrolled
          ? actualTheme === "dark"
            ? "rgba(15, 23, 42, 0.85)"
            : "rgba(255, 255, 255, 0.85)"
          : actualTheme === "dark"
          ? "rgba(15, 23, 42, 0.7)"
          : "rgba(255, 255, 255, 0.7)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* left part: avatar icon */}
      <div className="flex items-center md:hidden">
        <img
          src="/images/me.jpeg"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>

      {/* right part: theme buttons, language switcher and menu */}
      <div className="flex items-center gap-2">
        {/* language switcher (mobile version) */}
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>

        {/* theme button (mobile version) */}
        <div className="md:hidden relative" ref={mobileThemeMenuRef}>
          <button
            onClick={() => setIsMobileThemeMenuOpen(!isMobileThemeMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {actualTheme === "dark" ? (
              <FiSun size={25} className="text-white" />
            ) : (
              <MdOutlineDarkMode size={25} />
            )}
          </button>
          <AnimatePresence>
            {isMobileThemeMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50"
              >
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setIsMobileThemeMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm ${
                      theme === option.value
                        ? "bg-blue-100 dark:bg-blue-900 text-black dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white"
                    }`}
                  >
                    {option.icon}
                    <span className="dark:text-white">{option.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* burger menu button (mobile version) */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="burger-button relative w-8 h-8 flex flex-col justify-between items-center md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`burger-bar duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`burger-bar duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`burger-bar duration-300 ${
              isOpen ? "-rotate-45 translate-y-[-6px]" : ""
            }`}
          ></span>
        </button>

        {/* Desktop menu (navigation + theme + language) */}
        <nav className="max-md:hidden flex gap-6 items-center">
          {menuItems.map(({ label, ref }) => (
            <a
              key={label}
              className="relative dark:text-white duration-300 hover:text-blue-600 dark:hover:text-blue-400 after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:w-0 after:bg-blue-600 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              onClick={() => scrollToSection(ref)}
            >
              {label}
            </a>
          ))}

          {/* language switcher (desktop version) */}
          <LanguageSwitcher />

          {/* theme button (desktop version) */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {actualTheme === "dark" ? (
                <MdOutlineDarkMode size={22} />
              ) : (
                <MdOutlineLightMode size={22} />
              )}
            </button>
            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                >
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTheme(option.value);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm ${
                        theme === option.value
                          ? "bg-blue-100 dark:bg-blue-900 text-black dark:text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white"
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>

      {/* mobile menu (appears when clicked) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 350,
                damping: 25,
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
            className="absolute right-4 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 p-2"
          >
            {menuItems.map(({ label, ref }) => (
              <motion.button
                key={label}
                onClick={() => {
                  scrollToSection(ref);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white rounded-md"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
