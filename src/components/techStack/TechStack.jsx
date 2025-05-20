import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import TechStackSection from "./TechStackSection";
import { stackIcons, categories } from "../../data/techStack";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "../../utils/animations";

export default function TechStack() {
  const { theme } = useContext(ThemeContext);

  // Group icons by category
  const iconsByCategory = React.useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = stackIcons.filter(
        (item) => item.field === category.id
      );
      return acc;
    }, {});
  }, []);

  // Map categories to their order class
  const getCategoryOrder = (categoryLabel) => {
    switch (categoryLabel) {
      case "Frontend Development":
        return "order-1 md:order-2";
      case "Backend Development":
        return "order-2 md:order-1";
      default:
        return "order-3";
    }
  };

  return (
    <div className="w-full min-h-screen gap-3 md:pt-24 px-5 max-md:mt-24 text-black flex flex-col items-center justify-center">
      {/* Section header */}
      <motion.span
        className="inline-block py-1 px-3 rounded-full text-xs font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800/60 mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={viewportOptions}
      >
        Tech Stack
      </motion.span>

      <motion.h2
        className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={viewportOptions}
      >
        My Tech Stack
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-4xl mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={viewportOptions}
      >
        Here's a collection of technologies I've been working with across
        frontend, backend, and development tools. Each of them plays a role in
        how I build, test, and ship modern web applications.
      </motion.p>

      {/* Tech stack categories */}
      <motion.div
        className="relative w-3/4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="max-md:flex-col max-md:items-center flex items-stretch gap-5 justify-center">
          {categories.map((category, index) => (
            <TechStackSection
              key={index}
              title={category.label}
              icons={iconsByCategory[category.id]}
              theme={theme}
              order={getCategoryOrder(category.label)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
