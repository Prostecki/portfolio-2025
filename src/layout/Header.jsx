import { useState, useRef, useEffect, useContext } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

export default function Header({ scrollTo }) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", ref: scrollTo.homeRef },
    { label: "About", ref: scrollTo.aboutRef },
    { label: "Experience", ref: scrollTo.experienceRef },
    { label: "Skills", ref: scrollTo.techStackRef },
    { label: "Projects", ref: scrollTo.projectsRef },
    { label: "Get In Touch", ref: scrollTo.getInTouchRef },
  ];

  const menuVars = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

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
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="h-[72px] flex justify-center max-md:justify-end max-md:gap-5 items-center fixed md:top-5 left-0 right-0 mx-auto w-full md:max-w-2xl md:w-11/12 z-50 bg-white/70 dark:bg-slate-900/70 drop-shadow-md backdrop-blur-md md:rounded-full md:border md:border-gray-300 dark:md:border-gray-800 transition-colors duration-300">
      <div className="md:hidden">
        {theme === "dark" ? (
          <FiSun
            size={25}
            style={{ color: theme === "dark" ? "white" : "dark" }}
            onClick={toggleTheme}
          />
        ) : (
          <MdOutlineDarkMode size={25} onClick={toggleTheme} />
        )}
      </div>
      <nav className="max-md:hidden flex gap-6 justify-center text-black dark:text-white">
        {menuItems.map(({ label, ref }) => (
          <a
            key={label}
            className="nav-link duration-300 hover:text-blue-500"
            onClick={() => scrollToSection(ref)}
          >
            {label}
          </a>
        ))}
        <div className="max-md:hidden">
          {theme === "dark" ? (
            <FiSun size={25} onClick={toggleTheme} />
          ) : (
            <MdOutlineDarkMode size={25} onClick={toggleTheme} />
          )}
        </div>
      </nav>

      {/* burger menu button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="burger-button relative w-8 h-8 flex flex-col justify-between items-center md:hidden"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVars}
            className="absolute top-[4.8rem] right-4 w-48 dark:bg-slate-800 bg-slate-200 border dark:border-gray-700 rounded-md shadow-md dark:text-white p-4 z-40 flex flex-col"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {menuItems.map(({ label, ref }) => (
              <a
                key={label}
                className="burger-link duration-300 hover:text-blue-500"
                onClick={() => scrollToSection(ref)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
