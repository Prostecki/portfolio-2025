import React, { Suspense, useContext, useMemo } from "react";
import { motion } from "framer-motion";
const StackIcon = React.lazy(() => import("tech-stack-icons"));
import Chip from "@mui/material/Chip";
import { ThemeContext } from "../context/ThemeContext";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  viewportOptions,
} from "../utils/animations";

export default function TechStack() {
  const { theme } = useContext(ThemeContext);

  const stackIcons = [
    {
      name: "js",
      headline: "JavaScript",
      description:
        "JavaScript - A high-level, dynamic programming language used for creating interactive web applications.",
      field: "Frontend",
    },
    {
      name: "reactjs",
      headline: "React.js",
      description:
        "React.js - A JavaScript library for building user interfaces, particularly for single-page applications.",
      field: "Frontend",
    },
    {
      name: "vitejs",
      headline: "Vite.js",
      description:
        "Vite.js - A modern, fast build tool for web development that focuses on performance and simplicity.",
      field: "Frontend",
    },
    {
      name: "tailwindcss",
      headline: "Tailwind",
      description:
        "Tailwind CSS - A utility-first CSS framework that allows for rapid UI development with a flexible, customizable design system.",
      field: "Frontend",
    },
    {
      name: "bootstrap4",
      headline: "Bootstrap 4",
      description:
        "Bootstrap - A popular CSS framework that provides ready-made components and grid system for responsive design.",
      field: "Frontend",
    },
    {
      name: "canva",
      headline: "Canva",
      description:
        "Canva - A user-friendly online design tool for creating graphics, presentations, and social media posts.",
      field: "Tools",
    },
    {
      name: "docker",
      headline: "Docker",
      description:
        "Docker - A platform for developing, shipping, and running applications in containers, ensuring consistency across environments.",
      field: "Tools",
    },
    {
      name: "html5",
      headline: "HTML5",
      description:
        "HTML5 - The latest version of the standard markup language used for structuring content on the web.",
      field: "Frontend",
    },
    {
      name: "nodejs",
      headline: "Node.js",
      description:
        "Node.js - A runtime environment for executing JavaScript code server-side, enabling backend development with JavaScript.",
      field: "Backend",
    },
    {
      name: "mongoose",
      headline: "Mongoose",
      description:
        "Mongoose - A MongoDB object modeling tool designed to work in an asynchronous environment, used for schema validation and query building.",
      field: "Backend",
    },
    {
      name: "postman",
      headline: "Postman",
      description:
        "Postman - A tool for API development and testing, allowing developers to create requests and analyze responses from web services.",
      field: "Tools",
    },
    {
      name: "slack",
      headline: "Slack",
      description:
        "Slack - A messaging platform for team communication and collaboration, with integrated channels for projects and teams.",
      field: "Tools",
    },
    // {
    //   name: "jira",
    //   headline: "Jira",
    //   description:
    //     "Jira - A project management tool widely used in agile environments to track issues, bugs, and project progress.",
    //   field: "Tools",
    // },
    {
      name: "figma",
      headline: "Figma",
      description:
        "Figma - A collaborative design tool used for interface design, prototyping, and real-time collaboration among design teams.",
      field: "Tools",
    },
    {
      name: "vscode",
      headline: "VSCode",
      description:
        "VSCode - A lightweight but powerful code editor with a rich ecosystem of extensions and support for multiple programming languages.",
      field: "Tools",
    },
    {
      name: "mysql",
      headline: "MySQL",
      description:
        "MySQL - A widely used open-source relational database management system known for its speed and reliability.",
      field: "Backend",
    },
    {
      name: "postgresql",
      headline: "PostgreSQL",
      description:
        "PostgreSQL - A powerful, open-source object-relational database system that supports advanced data types and SQL standards.",
      field: "Backend",
    },
    {
      name: "mongodb",
      headline: "MongoDB",
      description:
        "MongoDB - A NoSQL database designed for scalability and flexibility, storing data in JSON-like documents with dynamic schemas.",
      field: "Backend",
    },
    {
      name: "vitejs",
      headline: "Vite",
      description: "",
      field: "Tools",
    },
    {
      name: "jest",
      headline: "Jest",
      description: "",
      field: "Tools",
    },
    {
      name: "typescript",
      headline: "TypeScript",
      description: "",
      field: "Frontend",
    },
    {
      name: "git",
      headline: "Git",
      description:
        "Git - A distributed version control system for tracking changes in source code during software development.",
      field: "Tools",
    },
  ];

  const iconsBySection = useMemo(() => {
    return {
      Frontend: stackIcons.filter((i) => i.field === "Frontend"),
      Backend: stackIcons.filter((i) => i.field === "Backend"),
      Tools: stackIcons.filter((i) => i.field === "Tools"),
    };
  }, []);

  const capitalizeFirstLetter = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
  };

  return (
    <div className="w-full min-h-screen gap-3 md:pt-24 px-5 max-md:mt-24 text-black flex flex-col items-center justify-center">
      <motion.span
        className="inline-block py-1 px-3 rounded-full text-xs font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800/60 mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={viewportOptions}
      >
        Tech Stack
      </motion.span>

      <motion.h2
        className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={viewportOptions}
      >
        My Tech Stack
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-4xl mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={viewportOptions}
      >
        Here's a collection of technologies I've been working with across
        frontend, backend, and development tools. Each of them plays a role in
        how I build, test, and ship modern web applications.
      </motion.p>

      <motion.div
        className="relative w-3/4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="max-md:flex-col max-md:items-center flex items-stretch gap-5 justify-center">
          {[
            "Frontend Development",
            "Backend Development",
            "Tools and Technologies",
          ].map((section, index) => (
            <motion.div
              key={index}
              className={`flex-1 border dark:border-white/20 border-black/10 dark:bg-black/80 bg-white p-5 rounded-xl ${
                section === "Frontend Development"
                  ? "order-1 md:order-2"
                  : section === "Backend Development"
                  ? "order-2 md:order-1"
                  : "order-3"
              }`}
              variants={fadeInLeft}
              custom={index}
            >
              <h1 className="text-2xl text-center font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-400 mb-5 text-black">
                {section}
              </h1>
              <motion.div
                className="flex flex-wrap ml-4 justify-center gap-1"
                variants={staggerContainer}
              >
                {iconsBySection[
                  section === "Frontend Development"
                    ? "Frontend"
                    : section === "Backend Development"
                    ? "Backend"
                    : "Tools"
                ]?.map((icon, i) => (
                  <Suspense
                    key={i}
                    fallback={
                      <div className="w-4 h-4 bg-gray-200 rounded-full" />
                    }
                  >
                    <Chip
                      icon={<StackIcon name={icon.name} className="w-4 h-4" />}
                      label={capitalizeFirstLetter(icon.headline)}
                      // variant="outlined"
                      sx={{
                        color: theme === "dark" ? "white" : "black",
                        borderColor: "gray",
                        backgroundColor:
                          theme === "dark"
                            ? "black"
                            : "rgba(255, 255, 255, 0.8)",
                        padding: "1rem 0.5rem",
                        "&:hover": {
                          backgroundColor: "rgba(200, 200, 200, 0.8)",
                        },
                        "& .MuiChip-icon": {
                          filter:
                            theme === "dark"
                              ? "none"
                              : "grayscale(100%) contrast(1.5) brightness(0.9)",
                        },
                        transition: "all 0.3s ease",
                        marginBottom: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                  </Suspense>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
