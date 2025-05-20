import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const WorkExperience = ({
  title,
  period,
  location,
  skills,
  delay,
  isRight,
}) => {
  return (
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
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      className={`relative cursor-pointer ${isRight ? "" : "max-w-[28rem]"}`}
    >
      <div className="relative group cursor-pointer">
        <div
          className={`absolute inset-0 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 ${
            isRight ? "md:ml-[2rem]" : ""
          }`}
        >
          <div className="w-full h-full rounded-2xl border border-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)] transition-all duration-500" />
        </div>
        <div
          className={`relative z-10 dark:bg-black/80 bg-slate-500/10 p-7 ${
            isRight ? "md:ml-[2rem]" : ""
          } rounded-2xl border border-black/10 dark:border-white/10 group-hover:border-white/30`}
        >
          <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
            {title}
          </h3>
          <div className="md:flex justify-start items-center gap-2">
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="dark:text-blue-500 text-black text-xl" />
              <p className="text-gray-500 text-sm">{period}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoLocationOutline className="dark:text-blue-500 text-black text-xl" />
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
          </div>
          <div className="dark:text-white text-black/50 text-sm mt-2">
            <p>
              <span className="dark:text-slate-400 text-slate-800 uppercase tracking-wide">
                Skills:{" "}
              </span>
              {skills}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
