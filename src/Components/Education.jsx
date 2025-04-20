import { IoCalendarOutline, IoSchoolOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="w-full px-6 text-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Education & Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            Here's a brief overview of my educational journey.
          </p>
        </motion.div>

        {/* First Education Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Fullstack Developer, open source
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="text-white" size={20} />
              <p>Nackademin, Stockholm</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Aug 2024 - June 2026</p>
            </div>
          </div>
          <div className="flex-1 hidden md:block"></div>
        </motion.div>

        {/* Second Education Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Municipal Adult Education
            </h3>
            <ul className="text-white ml-6 list-disc mb-4">
              <li className="my-2">Swedish</li>
              <li className="my-2">English</li>
            </ul>
            <div className="flex items-center gap-2 mb-3">
              <IoSchoolOutline className="text-white" size={20} />
              <p>Solna KomVux, Stockholm</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Sep 2022 - April 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Third Education Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Bachelor's degree in Athletics
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="text-white" size={20} />
              <p>Lesgaft National State University, Russia</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Sep 2014 - May 2018</p>
            </div>
          </div>
          <div className="flex-1 hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
}
