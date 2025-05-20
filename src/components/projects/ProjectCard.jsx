import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "../utils/animations";

export default function ProjectCard({
  project,
  index,
  isActive,
  onMouseDown,
  onMouseUp,
}) {
  return (
    <motion.div
      onMouseDown={() => onMouseDown(index)}
      onMouseUp={() => onMouseUp(index)}
      onMouseLeave={() => onMouseUp(index)}
      className="rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex flex-col h-full transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      style={{
        transform: isActive ? "scale(0.98)" : "scale(1)",
      }}
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden">
        <img
          className={`w-full h-full object-cover border-b border-gray-200 dark:border-gray-700 transition-transform duration-500 ${
            isActive ? "scale-105" : ""
          }`}
          src={project.image}
          alt={project.name}
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow p-4 flex flex-col justify-between gap-4">
        <motion.h3
          className="text-2xl font-bold text-gray-800 dark:text-white"
          variants={fadeInLeft}
          custom={0}
        >
          {project.name}
        </motion.h3>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-sm"
          variants={fadeInLeft}
          custom={1}
        >
          {project.description}
        </motion.p>

        <ProjectTools tools={project.tools} isActive={isActive} />

        <ProjectLinks
          liveLink={project.liveLink}
          githubLink={project.githubLink}
          isActive={isActive}
        />
      </div>
    </motion.div>
  );
}

function ProjectTools({ tools, isActive }) {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-4"
      variants={staggerContainer}
    >
      {tools.map((tool, toolIndex) => (
        <motion.div
          key={toolIndex}
          className={`flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 transition-all ${
            isActive ? "bg-gray-200 dark:bg-gray-600" : ""
          }`}
          variants={fadeInUp}
          custom={toolIndex}
        >
          <img
            src={tool.image}
            alt={tool.name}
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {tool.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProjectLinks({ liveLink, githubLink, isActive }) {
  return (
    <motion.div
      className="flex w-full justify-between"
      variants={fadeInUp}
      custom={2}
    >
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md ${
          isActive ? "bg-blue-600" : ""
        }`}
      >
        View Live
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg transition-all duration-300 shadow-md ${
          isActive ? "bg-gray-300 dark:bg-gray-600" : ""
        }`}
      >
        GitHub
      </a>
    </motion.div>
  );
}
