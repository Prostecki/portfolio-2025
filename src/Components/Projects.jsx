export default function Projects() {
  const projects = [
    {
      name: "Sortify",
      description:
        "A smart sorting application to organize your files efficiently.",
      image: "", // Add actual image source
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "DevConnect",
      description: "A platform for developers to collaborate and share ideas.",
      image: "", // Add actual image source
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "TaskFlow",
      description: "A task management app to boost productivity.",
      image: "", // Add actual image source
      liveLink: "#",
      githubLink: "#",
    },
  ];
  return (
    <section className="border-t-2 w-full py-32 flex flex-col items-center gap-8 bg-gray-900 text-white">
      <h1 className="text-4xl text-center uppercase tracking-wide font-bold mb-6">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-white w-64 p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <img
              className="w-full h-40 object-cover rounded-md mb-4"
              src={project.image}
              alt={project.name}
            />
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex justify-between w-full">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
