import { motion } from "framer-motion";

export default function Projects() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3,
      },
    }),
  };

  return (
    <div className="w-full max-md:pt-24 max-md:pb-10 pt-32 flex flex-col items-center gap-5 justify-center">
      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-slate-300/30 dark:bg-slate-500/10 text-slate-800/80 dark:text-blue-500 drop-shadow-2xl mb-4">
        Projects
      </span>
      <h1 className="text-4xl text-center font-extrabold text-gray-900 dark:text-white">
        Projects
      </h1>
      <motion.h2
        className="mb-10 text-lg text-center font-light text-gray-600 dark:text-gray-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        custom={0}
        variants={textVariants}
      >
        Here are some of the projects I've worked on.
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={index}
            variants={itemVariants}
          >
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover border-b border-gray-200 dark:border-gray-700"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="flex-grow p-4 flex flex-col justify-between gap-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg transition-all duration-300 shadow-md"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
