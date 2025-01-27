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

  return (
    <section className="flex flex-col justify-center gap-5 py-36 w-[60rem]">
      <h1 className="text-3xl text-white text-center uppercase tracking-wide font-[600] mb-4">
        Tech Skills
      </h1>
      <article className="mb-8 text-slate-500 text-center">
        All of my current technology stack that I really enjoy using.
      </article>
      <div className="flex w-full gap-5">
        <div className="grid grid-cols-2 grid-rows-3 gap-10 bg-slate-900 border-2 rounded-xl p-5">
          <h1 className="text-2xl w-full text-center text-white col-span-2">
            Frontend
          </h1>
          {stackIcons
            .filter((icon) => icon.field === "Frontend")
            .map((icon, i) => (
              <div key={i} className="flex items-center gap-5">
                <StackIcon className="w-8" name={icon.name} />
                <h1 className="text-white">{icon.name}</h1>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap bg-slate-900 border-2 rounded-xl">
          <h1 className="text-2xl w-full text-center text-white">Backend</h1>
          {stackIcons
            .filter((icon) => icon.field === "Backend")
            .map((icon, i) => (
              <div key={i} className="flex items-center gap-5">
                <StackIcon className="w-6" name={icon.name} />
                <h1 className="text-white">{icon.name}</h1>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap bg-slate-900 border-2 rounded-xl">
          <h1 className="text-2xl w-full text-center text-white">Tools</h1>
          {stackIcons
            .filter((icon) => icon.field === "Tools")
            .map((icon, i) => (
              <div key={i} className="flex items-center gap-5">
                <StackIcon className="w-6" name={icon.name} />
                <h1 className="text-white">{icon.name}</h1>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
