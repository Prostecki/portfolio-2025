import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

export default function HomeSocial() {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <a href="https://github.com/Prostecki" target="_blank">
          <FaGithub size={20} style={{ color: "black" }} />
        </a>
        <a href="https://www.linkedin.com/in/marktaratynov/" target="_blank">
          <FaLinkedin size={20} style={{ color: "black", cursor: "pointer" }} />
        </a>
        <a href="https://x.com/marktaratynov" target="_blank">
          <FaTwitter size={20} style={{ color: "black", cursor: "pointer" }} />
        </a>
        <a href="https://t.me/marktaratynov" target="_blank">
          <RiTelegram2Line
            size={20}
            style={{ color: "black", cursor: "pointer" }}
          />
        </a>
      </div>
    </section>
  );
}
