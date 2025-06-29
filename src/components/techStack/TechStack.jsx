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
import { useTranslation } from "react-i18next";

export default function TechStack() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation("common");

  // Group icons by category
  const iconsByCategory = React.useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = stackIcons.filter(
        (item) => item.field === category.id
      );
      return acc;
    }, {});
  }, []);

  // Function to get translated category label
  const getCategoryLabel = (categoryId) => {
    switch (categoryId) {
      case "Frontend":
        return t("techStack.frontend");
      case "Backend":
        return t("techStack.backend");
      case "Tools":
        return t("techStack.tools");
      default:
        return categoryId;
    }
  };

  // Map categories to their order class
  const getCategoryOrder = (categoryId) => {
    switch (categoryId) {
      case "Frontend":
        return "order-1 md:order-2";
      case "Backend":
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
        {t("techStack.sectionLabel")}
      </motion.span>

      <motion.h2
        className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={viewportOptions}
      >
        {t("techStack.title")}
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-4xl mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={viewportOptions}
      >
        {t("techStack.subtitle")}
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
              title={getCategoryLabel(category.id)}
              icons={iconsByCategory[category.id]}
              theme={theme}
              order={getCategoryOrder(category.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
