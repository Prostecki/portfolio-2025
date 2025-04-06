export default function Projects() {
  const projects = [
    {
      name: "Sortify",
      description:
        "Your ultimate time tracker and management system for habits, tasks, and events.",
      image: "src/assets/sortify.png",
      tools: [
        { name: "React.js", image: "src/assets/react.webp" },
        { name: "JavaScript", image: "src/assets/javascript.webp" },
        { name: "tailwind.css", image: "src/assets/tailwind.png" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Quiz App",
      description:
        "This web-based quiz application is built using JavaScript, HTML, and CSS, designed to provide a fun and interactive quiz experience for users.",
      image: "src/assets/quizapp.png",
      tools: [
        { name: "HTML", image: "src/assets/html.webp" },
        { name: "CSS", image: "src/assets/css.png" },
        { name: "JavaScript", image: "src/assets/javascript.webp" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Advent Calendar - 2024",
      description:
        "An interactive advent calendar where users can watch videos and follow baking instructions each day, leading up to Christmas.",
      image: "src/assets/advent-calendar-2024.png",
      tools: [
        { name: "React.js", image: "src/assets/react.webp" },
        { name: "JavaScript", image: "src/assets/javascript.webp" },
        { name: "tailwind.css", image: "src/assets/tailwind.png" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Parallax Effect",
      description:
        "A simple study project based on theme The Witcher using by Parallax and Swiper libraries in JS.",
      image: "src/assets/parallax.png",
      tools: [
        { name: "HTML", image: "src/assets/html.webp" },
        { name: "CSS", image: "src/assets/css.png" },
        { name: "JavaScript", image: "src/assets/javascript.webp" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
  ];
  return (
    <section className="w-full py-24 flex flex-col items-center gap-5 justify-center bg-gray-950 text-white">
      <h1 className="text-5xl text-center uppercase tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
        Projects
      </h1>
      <h3 className="mb-10 mt-5 text-xl font-light text-gray-400">
        Here are some of the projects I've worked on.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div className="flex-grow">
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.name}
              />
              <h2 className="text-2xl font-bold px-4 pt-4 mb-1 text-teal-300">
                {project.name}
              </h2>
              <p className="text-gray-300 text-sm px-4 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 px-4 mb-4">
                {project.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center border border-gray-700 p-2 rounded-md bg-gray-800"
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-8 object-cover mr-2"
                    />
                    <span className="text-sm text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between px-4 pb-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 shadow"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 shadow"
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
