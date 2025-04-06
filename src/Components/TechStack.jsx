import StackIcon from "tech-stack-icons";

export default function TechStack() {
  const stackIcons = [
    {
      name: "js",
      description: "JavaScript - The language of the web.",
      field: "Frontend",
    },
    {
      name: "reactjs",
      description: "React.js - A library for building UI.",
      field: "Frontend",
    },
    {
      name: "vitejs",
      description: "Vite.js - A fast build tool for modern apps.",
      field: "Frontend",
    },
    {
      name: "tailwindcss",
      description: "Tailwind CSS - Utility-first CSS framework.",
      field: "Frontend",
    },
    {
      name: "bootstrap4",
      description: "Bootstrap - CSS framework for responsive design.",
      field: "Frontend",
    },
    {
      name: "canva",
      description: "Canva - Online design tool.",
      field: "Tools",
    },
    {
      name: "docker",
      description: "Docker - Containerization platform.",
      field: "Backend",
    },
    {
      name: "html5",
      description: "HTML5 - Markup language for the web.",
      field: "Frontend",
    },
    {
      name: "nodejs",
      description: "Node.js - JavaScript runtime for backend.",
      field: "Backend",
    },
    {
      name: "postman",
      description: "Postman - API development tool.",
      field: "Backend",
    },
    {
      name: "slack",
      description: "Slack - Team communication platform.",
      field: "Tools",
    },
    {
      name: "vscode",
      description: "VSCode - Code editor by Microsoft.",
      field: "Tools",
    },

    {
      name: "mysql",
      description:
        "MySQL - a popular open-source relational database management system.",
      field: "Backend",
    },
    {
      name: "postgresql",
      description:
        "PostgreSQL - a powerful, open-source object-relational database system.",
      field: "Backend",
    },
    {
      name: "mongodb",
      description:
        "MongoDB - A NoSQL database that stores data in flexible, JSON-like documents.",
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
        <div className="w-full md:w-1/3 grid grid-cols-2 grid-rows-4 gap-1 rounded-xl p-5">
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
        <div className="w-full md:w-1/3 grid grid-cols-2 grid-rows-4 gap-1 rounded-xl p-5">
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
        <div className="w-full md:w-1/3 grid grid-cols-2 grid-rows-4 gap-1 rounded-xl p-5">
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
