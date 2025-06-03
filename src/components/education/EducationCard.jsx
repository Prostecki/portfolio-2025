import { motion } from "framer-motion";
import { IoCalendarOutline, IoSchoolOutline } from "react-icons/io5";
import { viewportOptions } from "../../utils/animations";
export default function EducationCard({
  title,
  institution,
  period,
  position,
  skills,
  courses,
  delay,
}) {
  const baseClasses =
    "relative dark:bg-black/80 bg-slate-500/10 p-7 max-w-[28rem] rounded-2xl border border-black/10 dark:border-white/10 group hover:border-white/30 cursor-pointer";
  const positionClasses = position === "right" ? "md:ml-[2rem]" : "";

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOptions}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      className={`${baseClasses} ${positionClasses}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-500 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
        {title}
      </h3>

      {courses && (
        <ul className="dark:text-white text-black ml-6 list-disc mb-4">
          {courses.map((course, index) => (
            <li key={index} className="my-2">
              {course}
            </li>
          ))}
        </ul>
      )}

      {skills && (
        <div className="mb-2 mt-2">
          <span className="dark:text-slate-400 text-slate-800 uppercase tracking-wide">
            Skills:
          </span>
          <span className="ml-2 text-black dark:text-white">{skills}</span>
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        <IoSchoolOutline className="dark:text-white text-black" size={20} />
        <p className="dark:text-slate-400 text-slate-800">{institution}</p>
      </div>
      <div className="flex items-center gap-2">
        <IoCalendarOutline className="dark:text-white text-black" size={16} />
        <p className="dark:text-slate-400 text-slate-800">{period}</p>
      </div>
    </motion.div>
  );
}
