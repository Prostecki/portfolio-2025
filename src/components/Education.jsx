import { IoCalendarOutline, IoSchoolOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="w-full px-6 text-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0 },
            },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl max-md:text-3xl font-extrabold text-transparent bg-clip-text drop-shadow-xl bg-gradient-to-r dark:from-white dark:to-gray-500 from-slate-600 to-gray-600">
            Education & Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            Here's a brief overview of my educational journey.
          </p>
        </motion.div>

        {/* Grid layout with alternating structure */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-x-[31px] max-md:gap-y-[.5rem]"
        >
          {/* Row 1 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0 },
              },
            }}
            className="relative dark:bg-black/80 bg-slate-500/10 max-w-[28rem] p-7 rounded-2xl border border-black/10 dark:border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
              Fullstack Developer, open source
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="dark:text-white text-black" size={20} />
              <p className="dark:text-slate-400 text-slate-800">Nackademin, Stockholm</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="dark:text-white text-black" size={16} />
              <p className="dark:text-slate-400 text-slate-800">Aug 2024 - Present</p>
            </div>
          </motion.div>
          <div className="border-l dark:border-white/20 border-black/20 h-full max-md:hidden"></div>
          <div className="opacity-0 max-md:hidden"></div>

          {/* Row 2 */}
          <div className="opacity-0 max-md:hidden"></div>
          <div className="border-r -mr-[2rem] max-md:hidden dark:border-white/20 border-black/20 h-full"></div>
          <motion.div
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              },
            }}
            className="relative dark:bg-black/80 bg-slate-500/10 p-7 md:ml-[2rem] max-w-[28rem] rounded-2xl border border-black/10 dark:border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
              Municipal Adult Education
            </h3>
            <ul className="dark:text-white text-black ml-6 list-disc mb-4">
              <li className="my-2">Swedish</li>
              <li className="my-2">English</li>
            </ul>
            <div className="flex items-center gap-2 mb-3">
              <IoSchoolOutline className="dark:text-white text-black" size={20} />
              <p className="dark:text-slate-400 text-slate-800">Solna KomVux, Stockholm</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="dark:text-white text-black" size={16} />
              <p className="dark:text-slate-400 text-slate-800">Oct 2022 - April 2024</p>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.45 },
              },
            }}
            className="relative dark:bg-black/80 bg-slate-500/10 p-7 max-w-[28rem] rounded-2xl border border-black/10 dark:border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
              The Complete JavaScript Course 2025: From Zero to Expert!
            </h3>
            <div className="mb-2 mt-2">
              <span className="dark:text-slate-400 text-slate-800 uppercase tracking-wide">Skills:</span>
              <span className="ml-2 text-black dark:text-white">JavaScript, ES6+, DOM, OOP, AJAX, APIs, NPM, Parcel, Modern Web Development</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="dark:text-white text-black" size={20} />
              <p className="dark:text-slate-400 text-slate-800">Udemy, Inc</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="dark:text-white text-black" size={16} />
              <p className="dark:text-slate-400 text-slate-800">Sep 2024 - Jan 2025</p>
            </div>
          </motion.div>
          <div className="border-l max-md:hidden dark:border-white/20 border-black/20 h-full"></div>
          <div className="opacity-0 max-md:hidden"></div>

          {/* Row 4 */}
          <div className="opacity-0 max-md:hidden"></div>
          <div className="border-r -mr-[2rem] max-md:hidden dark:border-white/20 border-black/20 h-full"></div>
          <motion.div
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0 },
              },
            }}
            className="relative dark:bg-black/80 bg-slate-500/10 max-w-[28rem] p-7 md:ml-[2rem] rounded-2xl border border-black/10 dark:border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
              Bachelor's degree in Athletics
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="dark:text-white text-black" size={20} />
              <p className="dark:text-slate-400 text-slate-800">Lesgaft National State University, Russia</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="dark:text-white text-black" size={16} />
              <p className="dark:text-slate-400 text-slate-800">Sep 2014 - May 2018</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
