import { BsBriefcaseFill } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { useState } from "react";
import Education from "./Education";
import Work from "./Work";

export default function Experience() {
  const [activeSection, setActiveSection] = useState("work");

  const handleWork = () => {
    setActiveSection("work");
  };

  const handleEducation = () => {
    setActiveSection("education");
  };

  return (
    <section className="py-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-[600]">Experience</h1>
        <p className="text-slate-500">My journey</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-8 mb-10">
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
                  : "text-gray-400 hover:text-blue-500"
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
}
