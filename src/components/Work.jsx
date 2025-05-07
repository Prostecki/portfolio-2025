import { IoCalendarOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { Scale } from "lucide-react";

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
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-xl bg-gradient-to-r dark:from-white dark:to-gray-500 from-slate-600 to-gray-600">
            Work Experience
          </h2>
          <p className="text-lg sm:text-xl dark:text-gray-400 text-gray-800 mt-4">
            Here's a summary of my professional journey.
          </p>
        </motion.div>

        {/* Start grid with alternating content blocks */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-x-[31px] max-md:gap-y-[1rem]"
        >
          {/* First row: Content Block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0 },
              },
            }}
            className="relative max-w-[28rem] cursor-pointer"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                <div className="w-full h-full rounded-2xl border border-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)] transition-all duration-500" />
              </div>
              <div className="relative z-10 dark:bg-black/80 bg-slate-500/10 p-7 rounded-2xl border border-black/10 dark:border-white/10 group-hover:border-white/30">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                  Delivery Driver
                </h3>
                <div className="md:flex justify-start items-center gap-2">
                  <div className="flex items-center gap-2">
                    <IoCalendarOutline className="dark:text-blue-500 text-black text-xl" />
                    <p className="text-gray-500 text-sm">May 2024 - Present</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLocationOutline className="dark:text-blue-500 text-black text-xl" />
                    <p className="text-gray-500 text-sm">
                      ICA Brunna, Stockholm
                    </p>
                  </div>
                </div>
                <div className="dark:text-white text-black/50 text-sm mt-2">
                  <p>
                    <span className="dark:text-slate-400 text-slate-800 uppercase tracking-wide">
                      Skills:{" "}
                    </span>
                    Time Management, Communication, Problem Solving, GPS,
                    Swedish, English
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Separator */}
          <div className="border-l dark:border-white/20 border-black/20 h-full max-md:hidden"></div>

          {/* Separator */}
          <div className="border-r -mr-[2rem] dark:border-white/20 border-black/20 h-full max-md:hidden"></div>

          {/* Second Content Block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              },
            }}
            className="relative cursor-pointer"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 md:ml-[2rem]">
                <div className="w-full h-full rounded-2xl border border-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)] transition-all duration-500" />
              </div>
              <div className="relative z-10 dark:bg-black/80 bg-slate-500/10 p-7 md:ml-[2rem] rounded-2xl border border-black/10 dark:border-white/10 group-hover:border-white/30">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                  Web Dev Freelancer
                </h3>
                <div className="md:flex justify-start items-center gap-2">
                  <div className="flex items-center gap-2">
                    <IoCalendarOutline className="dark:text-blue-500 text-black text-xl" />
                    <p className="text-gray-500 text-sm">Sep 2023 - Present</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLocationOutline className="dark:text-blue-500 text-black text-xl" />
                    <p className="text-gray-500 text-sm">
                      Self-Employed, Remote
                    </p>
                  </div>
                </div>
                <div className="dark:text-white text-black/50 text-sm mt-2">
                  <p>
                    <span className="dark:text-slate-400 text-slate-800 uppercase tracking-wide">
                      Skills:{" "}
                    </span>
                    HTML, CSS, JavaScript, React.js, Tailwind.CSS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third row: Content Block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
              },
            }}
            className="relative cursor-pointer"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                <div className="w-full h-full rounded-2xl border border-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)] transition-all duration-500" />
              </div>
              <div className="relative z-10 dark:bg-black/80 bg-slate-500/10 p-7 rounded-2xl border border-white/10 group-hover:border-white/30">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                  Web Development Intern
                </h3>
                <div className="md:flex justify-start items-center gap-2">
                  <div className="flex items-center gap-2">
                    <IoCalendarOutline className="dark:text-blue-500 text-black text-xl" />
                    <p className="text-gray-500 text-sm">
                      Oct 2022 - March 2023
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLocationOutline className="dark:text-blue-500 text-black text-xl" />
                    <p className="text-gray-500 text-sm">
                      Nordic IT School, Moscow
                    </p>
                  </div>
                </div>
                <div className="dark:text-white text-black/50 text-sm mt-2">
                  <p>
                    <span className="dark:text-slate-400 text-slate-800 uppercase tracking-wide">
                      Skills:{" "}
                    </span>
                    HTML, CSS, JavaScript, PHP, MySQL, Docker, GO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Separator */}
          <div className="border-l dark:border-white/20 border-black/20 h-full"></div>

          {/* Empty Block */}
          <div className="relative bg-black/80 p-7 rounded-2xl border border-white/10 opacity-0"></div>
        </motion.div>
      </div>
    </div>
  );
}
