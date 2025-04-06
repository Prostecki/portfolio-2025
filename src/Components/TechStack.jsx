import StackIcon from "tech-stack-icons";

export default function TechStack() {
  const stackIcons = [
    {
      name: "js",
      description:
        "JavaScript - A high-level, dynamic programming language used for creating interactive web applications.",
      field: "Frontend",
    },
    {
      name: "reactjs",
      description:
        "React.js - A JavaScript library for building user interfaces, particularly for single-page applications.",
      field: "Frontend",
    },
    {
      name: "vitejs",
      description:
        "Vite.js - A modern, fast build tool for web development that focuses on performance and simplicity.",
      field: "Frontend",
    },
    {
      name: "tailwindcss",
      description:
        "Tailwind CSS - A utility-first CSS framework that allows for rapid UI development with a flexible, customizable design system.",
      field: "Frontend",
    },
    {
      name: "bootstrap4",
      description:
        "Bootstrap - A popular CSS framework that provides ready-made components and grid system for responsive design.",
      field: "Frontend",
    },
    {
      name: "canva",
      description:
        "Canva - A user-friendly online design tool for creating graphics, presentations, and social media posts.",
      field: "Tools",
    },
    {
      name: "docker",
      description:
        "Docker - A platform for developing, shipping, and running applications in containers, ensuring consistency across environments.",
      field: "Backend",
    },
    {
      name: "html5",
      description:
        "HTML5 - The latest version of the standard markup language used for structuring content on the web.",
      field: "Frontend",
    },
    {
      name: "nodejs",
      description:
        "Node.js - A runtime environment for executing JavaScript code server-side, enabling backend development with JavaScript.",
      field: "Backend",
    },
    {
      name: "mongoose",
      description:
        "Mongoose - A MongoDB object modeling tool designed to work in an asynchronous environment, used for schema validation and query building.",
      field: "Backend",
    },
    {
      name: "postman",
      description:
        "Postman - A tool for API development and testing, allowing developers to create requests and analyze responses from web services.",
      field: "Backend",
    },
    {
      name: "slack",
      description:
        "Slack - A messaging platform for team communication and collaboration, with integrated channels for projects and teams.",
      field: "Tools",
    },
    {
      name: "jira",
      description:
        "Jira - A project management tool widely used in agile environments to track issues, bugs, and project progress.",
      field: "Tools",
    },
    {
      name: "figma",
      description:
        "Figma - A collaborative design tool used for interface design, prototyping, and real-time collaboration among design teams.",
      field: "Tools",
    },
    {
      name: "vscode",
      description:
        "VSCode - A lightweight but powerful code editor with a rich ecosystem of extensions and support for multiple programming languages.",
      field: "Tools",
    },
    {
      name: "mysql",
      description:
        "MySQL - A widely used open-source relational database management system known for its speed and reliability.",
      field: "Backend",
    },
    {
      name: "postgresql",
      description:
        "PostgreSQL - A powerful, open-source object-relational database system that supports advanced data types and SQL standards.",
      field: "Backend",
    },
    {
      name: "mongodb",
      description:
        "MongoDB - A NoSQL database designed for scalability and flexibility, storing data in JSON-like documents with dynamic schemas.",
      field: "Backend",
    },
  ];

  const capitalizeFirstLetter = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
  };

  return (
    <section className="flex flex-col justify-center gap-5 py-16 px-4 sm:px-6 md:px-8 w-full md:w-[80%]">
      <h1 className="text-3xl text-white text-center uppercase tracking-wide font-[600] mb-4">
        Tech Skills
      </h1>
      <article className="mb-8 text-slate-500 text-center">
        All of my current technology stack that I really enjoy using.
      </article>
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-1 rounded-xl p-5">
          <h1 className="text-2xl w-full tracking-wide text-center text-white col-span-2">
            Frontend
          </h1>
          {stackIcons
            .filter((icon) => icon.field === "Frontend")
            .map((icon, i) => (
              <div
                key={i}
                className="flex items-center justify-start ml-2 md:ml-14 mt-5 gap-2"
              >
                <StackIcon className="w-5" name={icon.name} />
                <h1 className="text-white">
                  {capitalizeFirstLetter(icon.name)}
                </h1>
              </div>
            ))}
        </div>
        <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-1 rounded-xl p-5">
          <h1 className="text-2xl w-full tracking-wide text-center text-white col-span-2">
            Backend
          </h1>
          {stackIcons
            .filter((icon) => icon.field === "Backend")
            .map((icon, i) => (
              <div
                key={i}
                className="flex items-center justify-start ml-2 md:ml-14 mt-5 gap-2"
              >
                <StackIcon className="w-5" name={icon.name} />
                <h1 className="text-white">
                  {capitalizeFirstLetter(icon.name)}
                </h1>
              </div>
            ))}
        </div>
        <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-1 rounded-xl p-5">
          <h1 className="text-2xl w-full tracking-wide text-center text-white col-span-2">
            Tools
          </h1>
          {stackIcons
            .filter((icon) => icon.field === "Tools")
            .map((icon, i) => (
              <div
                key={i}
                className="flex items-center justify-start mt-5 ml-2 md:ml-14 gap-2"
              >
                <StackIcon className="w-5" name={icon.name} />
                <h1 className="text-white">
                  {capitalizeFirstLetter(icon.name)}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
