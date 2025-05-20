import { motion } from "framer-motion";

const WorkHeader = () => {
  return (
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
  );
};

export default WorkHeader;
