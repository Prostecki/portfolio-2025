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
    <section className="border-t-2 w-full py-32 flex flex-col items-center gap-8 bg-gray-900 text-white">
      <h1 className="text-4xl text-center uppercase tracking-wide font-bold mb-6">
        Projects
      </h1>
      <div className="flex items-center justify-center gap-10 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-[30rem] p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full object-cover rounded-md mb-4"
              src={project.image}
              alt={project.name}
            />
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex gap-4 mb-4">
              {project.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className="flex items-center border p-2">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-8 object-cover mr-2"
                  />
                  <span className="text-sm text-gray-300">{tool.name}</span>
                </div>
              ))}
            </div>
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
