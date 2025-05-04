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
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
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
          className="grid md:grid-cols-2 gap-x-[31px] max-md:gap-y-[1rem]"
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
            className="relative bg-black/80 max-w-[28rem] p-7 rounded-2xl border border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-semibold mb-3">
              Fullstack Developer, open source
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="text-white" size={20} />
              <p>Nackademin, Stockholm</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Aug 2024 - Present</p>
            </div>
          </motion.div>
          <div className="border-l border-white/20 h-full"></div>
          {/* <div className="opacity-0"></div> */}

          {/* Row 2 */}
          {/* <div className="opacity-0"></div> */}
          <div className="border-r -mr-[2rem] border-white/20 h-full"></div>
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
            className="relative bg-black/80 p-7 ml-[2rem] max-w-[28rem] rounded-2xl border border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
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
              <p>Oct 2022 - April 2024</p>
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
            className="relative bg-black/80 p-7 max-w-[28rem] rounded-2xl border border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-semibold mb-3">
              The Complete JavaScript Course 2025: From Zero to Expert!
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <IoSchoolOutline className="text-white" size={20} />
              <p>Udemy, Inc</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-white" size={16} />
              <p>Sep 2024 - Jan 2025</p>
            </div>
          </motion.div>
          <div className="border-l border-white/20 h-full"></div>
          <div className="opacity-0"></div>

          {/* Row 4 */}
          <div className="opacity-0"></div>
          <div className="border-r -mr-[2rem] border-white/20 h-full"></div>
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
            className="relative bg-black/80 max-w-[28rem] p-7 ml-[2rem] rounded-2xl border border-white/10 group hover:border-white/30 cursor-pointer duration-300"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
