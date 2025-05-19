import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  viewportOptions,
} from "../utils/animations";

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      name: "Hakim Livs",
      description:
        "Hakim Livs Webshop is a full-stack e-commerce application built by modern concepts and technologies with user authentication through JWT auth",
      image: "images/hakim-livs.png",
      tools: [
        { name: "HTML", image: "images/html.webp" },
        { name: "CSS", image: "images/css.png" },
        { name: "JavaScript", image: "images/javascript.webp" },
        { name: "MongoDB", image: "images/mongodb-icon.svg" },
        { name: "Node.js", image: "images/nodejs.webp" },
        { name: "Jest", image: "images/jest.png" },
      ],
      liveLink: "https://webshop-2025-fe-g1-one.vercel.app",
      githubLink: "https://github.com/Prostecki/hakim-livs-webshop-frontend",
    },
    {
      name: "Sortify",
      description:
        "Your ultimate time tracker and management system for habits, tasks, and events.",
      image: "images/dashboard.jpg",
      tools: [
        { name: "React.js", image: "images/react.webp" },
        { name: "JavaScript", image: "images/javascript.webp" },
        { name: "tailwind.css", image: "images/tailwind.png" },
      ],
      liveLink: "https://sortify-khaki.vercel.app/",
      githubLink: "https://github.com/Prostecki/Sortify",
    },
    {
      name: "Quiz App",
      description:
        "This web-based quiz application is built using JavaScript, HTML, and CSS, designed to provide a fun and interactive quiz experience for users.",
      image: "images/quiz.jpg",
      tools: [
        { name: "HTML", image: "images/html.webp" },
        { name: "CSS", image: "images/css.png" },
        { name: "JavaScript", image: "images/javascript.webp" },
      ],
      liveLink: "https://prostecki.github.io/quiz-app/",
      githubLink: "https://github.com/Prostecki/quiz-app",
    },
    {
      name: "Advent Calendar - 2024",
      description:
        "An interactive advent calendar where users can watch videos and follow baking instructions each day, leading up to Christmas.",
      image: "images/advent.jpeg",
      tools: [
        { name: "React.js", image: "images/react.webp" },
        { name: "JavaScript", image: "images/javascript.webp" },
        { name: "tailwind.css", image: "images/tailwind.png" },
      ],
      liveLink: "https://anastasias-advent-calendar.vercel.app/",
      githubLink: "https://github.com/Prostecki/advent-calendar-react",
    },
    {
      name: "Parallax Effect",
      description:
        "A simple study project based on theme The Witcher using by Parallax and Swiper libraries in JS.",
      image: "images/parallax.png",
      tools: [
        { name: "HTML", image: "images/html.webp" },
        { name: "CSS", image: "images/css.png" },
        { name: "JavaScript", image: "images/javascript.webp" },
      ],
      liveLink: "https://prostecki.github.io/Parallax-Effect/",
      githubLink: "https://github.com/Prostecki/Parallax-Effect",
    },
  ];
  const [activeCards, setActiveCards] = useState(
    Array(projects.length).fill(false)
  );

  // Обработчики для анимации нажатия
  const handleMouseDown = (index) => {
    setActiveCards((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseUp = (index) => {
    setActiveCards((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  // Анимация для карточек проектов
  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full max-md:pt-24 max-md:pb-10 pt-32 flex flex-col items-center gap-5 justify-center">
      <motion.span
        className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-slate-300/30 dark:bg-slate-500/10 text-slate-800/80 dark:text-blue-500 drop-shadow-2xl mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={viewportOptions}
      >
        Projects
      </motion.span>

      <motion.h2
        className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={viewportOptions}
      >
        Projects
      </motion.h2>

      <motion.p
        className="mb-10 text-lg text-center font-light text-gray-600 dark:text-gray-400"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={viewportOptions}
      >
        Here are some of the projects I've worked on.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onMouseDown={() => handleMouseDown(index)}
            onMouseUp={() => handleMouseUp(index)}
            onMouseLeave={() => handleMouseUp(index)}
            className={`rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex flex-col h-full transition-all duration-300 ${
              activeCards[index] ? "scale-98" : ""
            }`}
            variants={projectCardVariants}
            custom={index}
            style={{
              transform: activeCards[index] ? "scale(0.98)" : "scale(1)",
            }}
          >
            <div className="h-48 overflow-hidden">
              <img
                className={`w-full h-full object-cover border-b border-gray-200 dark:border-gray-700 transition-transform duration-500 ${
                  activeCards[index] ? "scale-105" : ""
                }`}
                src={project.image}
                alt={project.name}
              />
            </div>
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
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={staggerContainer}
              >
                {project.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className={`flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 transition-all ${
                      activeCards[index] ? "bg-gray-200 dark:bg-gray-600" : ""
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
              <motion.div
                className="flex w-full justify-between"
                variants={fadeInUp}
                custom={2}
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md ${
                    activeCards[index] ? "bg-blue-600" : ""
                  }`}
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg transition-all duration-300 shadow-md ${
                    activeCards[index] ? "bg-gray-300 dark:bg-gray-600" : ""
                  }`}
                >
                  GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
