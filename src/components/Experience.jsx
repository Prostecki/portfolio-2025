import { BsBriefcaseFill } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import Education from "./Education";
import Work from "./Work";
import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState("work");

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
      <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4">
        My Story
      </span>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 w-full">
          <div className="flex items-center gap-2">
            <BsBriefcaseFill
              size={25}
              className="cursor-pointer"
              color="gray"
            />
            <button
              onClick={handleWork}
              className={`text-2xl font-medium ${
                activeSection === "work"
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-blue-500"
              } duration-300 cursor-pointer`}
            >
              Work
            </button>
          </div>
          <div className="flex items-center gap-2">
            <TbSchool size={35} className="cursor-pointer" color="gray" />
            <button
              onClick={handleEducation}
              className={`text-2xl font-medium ${
                activeSection === "education"
                  ? "text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              } duration-300 cursor-pointer`}
            >
              Education
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
