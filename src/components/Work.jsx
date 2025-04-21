import { IoCalendarOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className="w-full py-2 px-6 text-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Work Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            Here's a summary of my professional journey.
          </p>
        </motion.div>

        {/* Delivery Driver */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">Delivery Driver</h3>
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>ICA Brunna, Stockholm</p>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                Time Management, Communication, Problem Solving, GPS, Swedish,
                English
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <IoCalendarOutline className="text-white" size={16} />
              <p>May 2024 - Present</p>
            </div>
          </div>
        </motion.div>

        {/* Web Dev Freelancer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">Web Dev Freelancer</h3>
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>Self-Employed, Remote</p>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                HTML, CSS, JavaScript, React.js, Tailwind.CSS
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Sep 2023 - Present</p>
            </div>
          </div>
        </motion.div>

        {/* Web Development Intern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">
              Web Development Intern
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>Nordic IT School, Moscow</p>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                HTML, CSS, JavaScript, PHP, MySQL, Docker, GO
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Oct 2022 - March 2023</p>
            </div>
          </div>
        </motion.div>

        {/* Locksmith Specialist */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">
              Locksmith Specialist
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>Self-Employed, Russia</p>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                Emergency Lock Opening, Patience, Problem Solving, Customer
                Service, Sales
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Dec 2019 - Sept 2022</p>
            </div>
          </div>
        </motion.div>

        {/* Coach in Athletics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">Coach in Athletics</h3>
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>Athletics School, Russia</p>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                Communication, Interpersonal Skills, Leadership, Problem
                Solving, Motivation, Planning
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Sep 2018 - May 2019</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
