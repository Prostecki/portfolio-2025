import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function HomeSocial() {
  const [hovered, setHovered] = useState(null);
  const { actualTheme } = useContext(ThemeContext);
  const icons = [
    {
      id: "github",
      href: "https://github.com/Prostecki",
      icon: (
        <FaGithub
          className="drop-shadow-xl"
          size={25}
          style={{ color: actualTheme === "dark" ? "white" : "black" }}
        />
      ),
      label: "GitHub",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/marktaratynov/",
      icon: (
        <FaLinkedin
          className="drop-shadow-lg"
          size={25}
          style={{
            color: actualTheme === "dark" ? "white" : "black",
            cursor: "pointer",
          }}
        />
      ),
      label: "LinkedIn",
    },
    {
      id: "twitter",
      href: "https://x.com/marktaratynov",
      icon: (
        <FaTwitter
          className="drop-shadow-lg"
          size={25}
          style={{
            color: actualTheme === "dark" ? "white" : "black",
            cursor: "pointer",
          }}
        />
      ),
      label: "Twitter",
    },
    {
      id: "telegram",
      href: "https://t.me/marktaratynov",
      icon: (
        <RiTelegram2Line
          className="drop-shadow-lg"
          size={25}
          style={{
            color: actualTheme === "dark" ? "white" : "black",
            cursor: "pointer",
          }}
        />
      ),
      label: "Telegram",
    },
  ];

  return (
    <div>
      <div className="flex justify-center gap-10 relative">
        {icons.map(({ id, href, icon, label }) => (
          <div
            key={id}
            className="relative group dark:bg-gray-600/20 bg-gray-200/90 p-3 rounded-xl hover:scale-105 transition duration-200 cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
            >
              {icon}
            </a>
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-400/80 to-blue-500/80 dark:from-blue-400/80 dark:via-blue-500/80 dark:to-blue-800/90 transition-all duration-300 group-hover:w-full"></div>
            {hovered === id && (
              <div className="absolute -right-12 -bottom-12 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-10 duration-300">
                {href}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
