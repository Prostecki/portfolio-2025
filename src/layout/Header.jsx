import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ scrollTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="h-[72px] flex justify-center max-md:justify-start max-md:gap-5 items-center md:top-6 left-0 max-md:py-4 right-0 mx-auto w-full md:max-w-xl md:w-11/12 z-50 md:overflow-x-hidden max-md:bg-slate-900 bg-transparent drop-shadow-lg backdrop-blur-md md:rounded-full md:border md:border-gray-800 fixed">
      <nav className="">
        <ul className="max-md:hidden flex gap-6 justify-center text-white">
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.homeRef)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.aboutRef)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.aboutRef)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.experienceRef)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.getInTouchRef)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.techStackRef)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(scrollTo.projectsRef)}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* burger menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 text-3xl right-4 text-white md:hidden"
      >
        {isOpen ? "X" : "☰"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-[72px] right-4 w-48 bg-slate-800 border border-gray-700 rounded-md shadow-md text-white p-4 z-40 flex flex-col"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a
              className="py-1 hover:underline cursor-pointer"
              onClick={() => scrollToSection(scrollTo.homeRef)}
            >
              Home
            </a>
            <a
              className="py-1 hover:underline cursor-pointer"
              onClick={() => scrollToSection(scrollTo.aboutRef)}
            >
              About
            </a>
            <a
              className="py-1 hover:underline cursor-pointer"
              onClick={() => scrollToSection(scrollTo.experienceRef)}
            >
              Experience
            </a>

            <a
              className="py-1 hover:underline cursor-pointer"
              onClick={() => scrollToSection(scrollTo.techStackRef)}
            >
              Skills
            </a>
            <a
              className="py-1 hover:underline cursor-pointer"
              onClick={() => scrollToSection(scrollTo.projectsRef)}
            >
              Projects
            </a>
            <a
              className="py-1 hover:underline cursor-pointer"
              onClick={() => scrollToSection(scrollTo.getInTouchRef)}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
