import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import Chip from "@mui/material/Chip";

export default function TechStack() {
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
      headline: "Tailwind CSS",
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
      field: "Backend",
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
      field: "Backend",
    },
    {
      name: "slack",
      headline: "Slack",
      description:
        "Slack - A messaging platform for team communication and collaboration, with integrated channels for projects and teams.",
      field: "Tools",
    },
    {
      name: "jira",
      headline: "Jira",
      description:
        "Jira - A project management tool widely used in agile environments to track issues, bugs, and project progress.",
      field: "Tools",
    },
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
  ];

  const capitalizeFirstLetter = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
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

  return (
    <div className="w-full min-h-screen gap-3 md:pt-24 px-5 max-md:mt-24 text-black flex flex-col items-center justify-center">
      <motion.span
        className="inline-block py-1 px-3 mb-8 rounded-full text-xs font-medium bg-teal-500/10 text-blue-500"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.span>
      <motion.h1
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        My Tech Stack
      </motion.h1>
      <motion.p
        className="text-center text-gray-400 max-w-4xl mb-12"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
      >
        Here's a collection of technologies I've been working with across
        frontend, backend, and development tools. Each of them plays a role in
        how I build, test, and ship modern web applications.
      </motion.p>

      <div className="relative w-3/4">
        <div className="max-md:flex-col max-md:items-center flex items-stretch gap-5 justify-center">
          {[
            "Frontend Development",
            "Backend Development",
            "Tools and Technologies",
          ].map((section, index) => (
            <motion.div
              key={index}
              className="flex-1 border border-gray-700 bg-black/80 p-5 rounded-xl"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-5">
                {section}
              </h1>
              <div className="flex flex-wrap ml-4 justify-center gap-1">
                {stackIcons
                  .filter((icon) => {
                    if (section === "Frontend Development")
                      return icon.field === "Frontend";
                    if (section === "Backend Development")
                      return icon.field === "Backend";
                    return icon.field === "Tools";
                  })
                  .map((icon, i) => (
                    <Chip
                      key={i}
                      icon={<StackIcon name={icon.name} className="w-4 h-4" />}
                      label={capitalizeFirstLetter(icon.headline)}
                      variant="outlined"
                      sx={{
                        color: "white",
                        borderColor: "gray",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        padding: "1rem 0.5rem",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                        transition: "all 0.3s ease",
                        marginBottom: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
