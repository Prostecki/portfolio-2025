import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

export default function HomeSocial() {
  const [hovered, setHovered] = useState(null);

  const icons = [
    {
      id: "github",
      href: "https://github.com/Prostecki",
      icon: (
        <FaGithub
          className="drop-shadow-xl"
          size={25}
          style={{ color: "white" }}
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
          style={{ color: "white", cursor: "pointer" }}
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
          style={{ color: "white", cursor: "pointer" }}
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
          style={{ color: "white", cursor: "pointer" }}
        />
      ),
      label: "Telegram",
    },
  ];

  return (
    <div>
      <div className="flex justify-center gap-10 relative">
        {icons.map(({ id, href, icon }) => (
          <div
            key={id}
            className="relative group bg-gray-600/20 p-3 rounded-xl hover:scale-105 transition duration-200 cursor-pointer"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
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
