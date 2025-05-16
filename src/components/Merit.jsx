import { motion, AnimatePresence } from "framer-motion";
import { MdLocationCity } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Merit() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="dark:bg-slate-900 bg-white min-h-screen py-12 px-4">
      <h1 className="text-4xl text-center mb-10 sm:text-5xl font-extrabold bg-gradient-to-r dark:from-white dark:to-gray-400 from-black to-gray-600 text-transparent bg-clip-text">
        Merit
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 mb-12"
      >
        <div className={`flex-1 max-w-xl p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 ${theme === 'dark'
          ? 'bg-gradient-to-r from-gray-700 to-gray-900'
          : 'bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200'
          }`}>
          <h3 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">
            Athletics Event Assistant
          </h3>
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-blue-500" size={20} />
              <p className="dark:text-gray-300 text-gray-600">Tureberg, Sollentuna</p>
            </div>
            <p className="w-4/5 dark:text-gray-300 text-gray-600">
              I am involved in volunteer work at the Tureberg Athletics Club,
              assisting in the organization and management of competitions.
            </p>
          </div>
          <div className="text-sm mt-2">
            <p>
              <span className="dark:text-slate-400 text-gray-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              <span className="dark:text-gray-300 text-gray-600">Management, Communication, Problem Solving, Swedish, English</span>
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3 dark:text-gray-300 text-gray-600">
            <p>May 2024 - Present</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 mb-12"
      >
        <div className={`flex-1 max-w-xl p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 ${theme === 'dark'
          ? 'bg-gradient-to-r from-gray-700 to-gray-900'
          : 'bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200'
          }`}>
          <h3 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">
            Hurdles Coach
          </h3>
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-blue-500" size={20} />
              <p className="dark:text-gray-300 text-gray-600">Tureberg, Sollentuna</p>
            </div>
            <p className="w-3/4 dark:text-gray-300 text-gray-600">
              I work as a hurdles coach in track and field, training athletes in
              sprint hurdle techniques and race preparation.
            </p>
          </div>
          <div className="text-sm mt-2">
            <p>
              <span className="dark:text-slate-400 text-gray-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              <span className="dark:text-gray-300 text-gray-600">Sprint Hurdling, Technique Analysis, Coaching, Motivation, Swedish, English</span>
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3 dark:text-gray-300 text-gray-600">
            <p>March 2025 - Present</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
