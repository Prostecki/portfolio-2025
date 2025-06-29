import { BsBriefcaseFill } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import Education from "./education/Education";
import Work from "./workExperience/Work";
import { forwardRef, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Experience = forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState("work");
  const { t } = useTranslation("common");
  const { theme } = useContext(ThemeContext);

  const handleWork = () => {
    setActiveSection("work");
  };

  const handleEducation = () => {
    setActiveSection("education");
  };

  return (
    <div
      className="flex w-full pt-32 max-md:mt-12 h-max flex-col gap-10 px-4 max-md:px-6 max-md:py-20 items-center text-white"
      ref={ref}
      id="experience"
    >
      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800 mb-4">
        {t("experience.sectionLabel")}
      </span>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 w-full">
          <div className="flex items-center gap-2">
            <BsBriefcaseFill
              size={25}
              className="cursor-pointer"
              color={theme === "dark" ? "gray" : "black"}
            />
            <button
              onClick={handleWork}
              className={`text-2xl font-medium ${
                activeSection === "work"
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-blue-500"
              } duration-300 cursor-pointer`}
            >
              {t("experience.work")}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <TbSchool
              size={35}
              className="cursor-pointer"
              color={theme === "dark" ? "gray" : "black"}
            />
            <button
              onClick={handleEducation}
              className={`text-2xl font-medium ${
                activeSection === "education"
                  ? "text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              } duration-300 cursor-pointer`}
            >
              {t("experience.education")}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === "work" ? <Work /> : <Education />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});

export default Experience;
