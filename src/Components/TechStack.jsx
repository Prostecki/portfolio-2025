import StackIcon from "tech-stack-icons";
import { useState } from "react";

export default function TechStack() {
  const stackIcons = [
    {
      name: "nextjs",
      description: "Next.js - React framework for production.",
    },
    { name: "js", description: "JavaScript - The language of the web." },
    { name: "reactjs", description: "React.js - A library for building UI." },
    {
      name: "vitejs",
      description: "Vite.js - A fast build tool for modern apps.",
    },
    {
      name: "tailwindcss",
      description: "Tailwind CSS - Utility-first CSS framework.",
    },
    {
      name: "bootstrap4",
      description: "Bootstrap - CSS framework for responsive design.",
    },
    { name: "canva", description: "Canva - Online design tool." },
    { name: "docker", description: "Docker - Containerization platform." },
    { name: "git", description: "Git - Version control system." },
    { name: "github", description: "GitHub - Code hosting platform." },
    { name: "html5", description: "HTML5 - Markup language for the web." },
    {
      name: "nodejs",
      description: "Node.js - JavaScript runtime for backend.",
    },
    { name: "npm2", description: "npm - Node.js package manager." },
    { name: "postman", description: "Postman - API development tool." },
    { name: "slack", description: "Slack - Team communication platform." },
    { name: "vscode", description: "VSCode - Code editor by Microsoft." },
    {
      name: "vuejs",
      description: "Vue.js - Progressive JavaScript framework.",
    },
    {
      name: "materialui",
      description: "Material UI - React component library.",
    },
    {
      name: "mysql",
      description:
        "MySQL - a popular open-source relational database management system.",
    },
    {
      name: "postgresql",
      description:
        "PostgreSQL - a powerful, open-source object-relational database system.",
    },
    {
      name: "mongodb",
      description:
        "MongoDB - A NoSQL database that stores data in flexible, JSON-like documents.",
    },
  ];

  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEvents = (index, isActive) => {
    setActiveIcon(isActive ? index : null);
  };

  return (
    <section className="tech-stack p-14 py-28">
      <h1 className="text-3xl font-[600] mb-4">Tech Skills</h1>
      <article className="mb-8 text-slate-500 text-center">
        All of my current technology stack that I really enjoy using.
      </article>
      <div className="flex flex-wrap justify-center gap-1 relative">
        {stackIcons.map((icon, i) => (
          <div
            key={i}
            onMouseEnter={() => handleMouseEvents(i, true)}
            onMouseLeave={() => handleMouseEvents(i, false)}
            className={`transition-transform inline-block cursor-pointer stackIcon ${
              activeIcon === i ? "scale-95 translate-y-1" : ""
            }`}
          >
            <StackIcon name={icon.name} />
            {activeIcon === i && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max max-w-52 text-center p-2 bg-white text-gray-500 shadow-md rounded-lg">
                {icon.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
