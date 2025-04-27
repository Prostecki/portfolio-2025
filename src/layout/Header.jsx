import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="h-[72px] fixed flex justify-center items-center md:top-6 left-0 max-md:py-4 right-0 mx-auto w-full md:max-w-xl md:w-11/12 z-50 md:overflow-x-hidden max-md:bg-slate-900 bg-transparent drop-shadow-lg backdrop-blur-md md:rounded-full md:border md:border-gray-800">
      <nav className="">
        <ul className="max-md:hidden flex gap-6 justify-center text-white">
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/about">About</a>
          </li>
          <li>
            <a to="/experience">Experience</a>
          </li>
          <li>
            <a to="/contact">Contact</a>
          </li>
          <li>
            <a to="/techstack">Skills</a>
          </li>
          <li>
            <a to="/projects">Projects</a>
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
          <motion.nav
            className="fixed top-[72px] left-0 right-0 bg-slate-900 z-40 text-white p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="py-2" onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/about" className="py-2" onClick={handleNavClick}>
              About
            </Link>
            <Link to="/experience" className="py-2" onClick={handleNavClick}>
              Experience
            </Link>
            <Link to="/contact" className="py-2" onClick={handleNavClick}>
              Contact
            </Link>
            <Link to="/techstack" className="py-2" onClick={handleNavClick}>
              Skills
            </Link>
            <Link to="/projects" className="py-2" onClick={handleNavClick}>
              Projects
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
