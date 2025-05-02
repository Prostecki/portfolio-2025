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
      liveLink: "#",
      githubLink: "#",
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
      githubLink: "#",
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
      liveLink: "#",
      githubLink: "#",
    },
  ];
  return (
    <div className="w-full max-md:pt-24 max-md:pb-10 pt-32 flex flex-col items-center gap-5 justify-center">
      <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4">
        Projects
      </span>
      <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-white via-gray-400 to-slate-500 text-transparent bg-clip-text">
        Projects
      </h1>
      <h3 className="mb-10 mt-5 text-xl text-center font-light text-gray-400">
        Here are some of the projects I've worked on.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900/60 backdrop-blur-md shadow-2xl hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
          >
            <div className="flex-grow">
              <img
                className="w-full h-48 object-bottom project-image"
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
                    className="flex items-center gap-2 border border-gray-700 px-5 py-1 rounded-full bg-slate-700/40 justify-center"
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-6 object-contain"
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
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 shadow-md"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg transition-all duration-300 shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
