import { IoCalendarOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

export default function Work() {
  return (
    <div className="w-full py-2 px-6 text-white">
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

        {/* Start grid with alternating content blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* First row: Content Block, Separator, Empty Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black/80 p-7 rounded-2xl border border-white/10 group hover:border-white/30"
            style={{ transform: "translateY(-30px)" }}
          >
            <h3 className="text-2xl font-semibold mb-3">Delivery Driver</h3>
            <div className="md:flex justify-start items-center gap-2">
              <div className="flex items-center gap-2">
                <IoCalendarOutline className="text-blue-500 text-xl" />
                <p className="text-gray-500 text-sm">May 2024 - Present</p>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-blue-500 text-xl" />
                <p className="text-gray-500 text-sm">ICA Brunna, Stockholm</p>
              </div>
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
          </motion.div>

          {/* Separator */}
          <div className="border-l border-white/20 h-full"></div>

          {/* Separator */}
          <div className="border-r -mr-[2rem] border-white/20 h-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black/80 p-7 ml-[2rem] rounded-2xl border border-white/10 group hover:border-white/30"
            style={{ transform: "translateY(30px)" }}
          >
            <h3 className="text-2xl font-semibold mb-3">Web Dev Freelancer</h3>
            <div className="md:flex justify-start items-center gap-2">
              <div className="flex items-center gap-2">
                <IoCalendarOutline className="text-blue-500 text-xl" />
                <p className="text-gray-500 text-sm">Sep 2023 - Present</p>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-blue-500 text-xl" />
                <p className="text-gray-500 text-sm">Self-Employed, Remote</p>
              </div>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                HTML, CSS, JavaScript, React.js, Tailwind.CSS
              </p>
            </div>
          </motion.div>

          {/* Third row: Content Block, Separator, Empty Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black/80 p-7 rounded-2xl border border-white/10 group hover:border-white/30"
            style={{ transform: "translateY(-30px)" }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              Web Development Intern
            </h3>
            <div className="md:flex justify-start items-center gap-2">
              <div className="flex items-center gap-2">
                <IoCalendarOutline className="text-blue-500 text-xl" />
                <p className="text-gray-500 text-sm">Oct 2022 - March 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-blue-500 text-xl" />
                <p className="text-gray-500 text-sm">
                  Nordic IT School, Moscow
                </p>
              </div>
            </div>
            <div className="text-white text-sm mt-2">
              <p>
                <span className="text-slate-400 uppercase tracking-wide">
                  Skills:{" "}
                </span>
                HTML, CSS, JavaScript, PHP, MySQL, Docker, GO
              </p>
            </div>
          </motion.div>

          {/* Separator */}
          <div className="border-l border-white/20 h-full"></div>

          {/* Empty Block */}
          <div className="relative bg-black/80 p-7 rounded-2xl border border-white/10 opacity-0"></div>
        </div>
      </div>
    </div>
  );
}
