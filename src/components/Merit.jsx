import { motion, AnimatePresence } from "framer-motion";
import { MdLocationCity } from "react-icons/md";
export default function Merit() {
  return (
    <section>
      <h1 className="text-4xl text-center mb-10 sm:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
        Merit
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 mb-12"
      >
        <div className="flex-1 max-w-xl bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-3">
            Athletics Event Assistant
          </h3>
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>Tureberg, Sollentuna</p>
            </div>
            <p className="w-4/5">
              I am involved in volunteer work at the Tureberg Athletics Club,
              assisting in the organization and management of competitions.
            </p>
          </div>
          <div className="text-white text-sm mt-2">
            <p>
              <span className="text-slate-400 uppercase tracking-wide">
                Skills:{" "}
              </span>
              Management, Communication, Problem Solving, Swedish, English
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            {/* <IoCalendarOutline className="text-white" size={16} /> */}
            <p>May 2024 - Present</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 mb-12"
      >
        <div className="flex-1 max-w-xl bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-3">Hurdles Coach</h3>
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <MdLocationCity className="text-white" size={20} />
              <p>Tureberg, Sollentuna</p>
            </div>
            <p className="w-3/4">
              I work as a hurdles coach in track and field, training athletes in
              sprint hurdle techniques and race preparation.
            </p>
          </div>
          <div className="text-white text-sm mt-2">
            <p>
              <span className="text-slate-400 uppercase tracking-wide">
                Skills:{" "}
              </span>
              Sprint Hurdling, Technique Analysis, Coaching, Motivation,
              Swedish, English
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <p>2024 - Present</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
