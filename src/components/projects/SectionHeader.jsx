import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "../utils/animations";

export default function SectionHeader({ title, subtitle, customViewport }) {
  const viewport = customViewport || viewportOptions;

  return (
    <>
      <motion.span
        className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-slate-300/30 dark:bg-slate-500/10 text-slate-800/80 dark:text-blue-500 drop-shadow-2xl mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={viewport}
      >
        {title}
      </motion.span>

      <motion.h2
        className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={viewport}
      >
        {title}
      </motion.h2>

      <motion.p
        className="mb-10 text-lg text-center font-light text-gray-600 dark:text-gray-400"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={viewport}
      >
        {subtitle}
      </motion.p>
    </>
  );
}
