import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

export default function HomeSocial() {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <a href="https://github.com/Prostecki" target="_blank">
          <FaGithub
            className="drop-shadow-lg"
            size={20}
            style={{ color: "white" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/marktaratynov/" target="_blank">
          <FaLinkedin
            className="drop-shadow-lg"
            size={20}
            style={{ color: "white", cursor: "pointer" }}
          />
        </a>
        <a href="https://x.com/marktaratynov" target="_blank">
          <FaTwitter
            className="drop-shadow-lg"
            size={20}
            style={{ color: "white", cursor: "pointer" }}
          />
        </a>
        <a href="https://t.me/marktaratynov" target="_blank">
          <RiTelegram2Line
            className="drop-shadow-lg"
            size={20}
            style={{ color: "white", cursor: "pointer" }}
          />
        </a>
      </div>
    </section>
  );
}
