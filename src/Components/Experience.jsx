import { BsBriefcaseFill } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import Education from "./Education";
import Work from "./Work";
import { forwardRef, useState } from "react";

const Experience = forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState("work");

  const handleWork = () => {
    setActiveSection("work");
  };

  const handleEducation = () => {
    setActiveSection("education");
  };

  return (
    <section
      className="flex w-full pt-32 h-max flex-col gap-10 px-4 max-md:px-6 max-md:py-20 items-center"
      ref={ref}
      id="experience"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4">
          Journey
        </span>
        <h1 className="text-3xl text-white font-[600] uppercase tracking-wide">
          Experience
        </h1>
        <p className="text-slate-500">My journey</p>
      </div>
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
        {activeSection === "work" && <Work />}
      </div>
      {activeSection === "education" && <Education />}
    </section>
  );
});

export default Experience;
