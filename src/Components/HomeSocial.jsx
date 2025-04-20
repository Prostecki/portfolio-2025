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
    <section>
      <div className="flex flex-col gap-10 max-md:hidden relative">
        {icons.map(({ id, href, icon }) => (
          <div
            key={id}
            className="relative group"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
            {hovered === id && (
              <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
                {href}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
