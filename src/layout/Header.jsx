import { useEffect, useState } from "react";

export default function Header({ scrollToAbout, scrollToExperience }) {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-black bg-opacity-80 backdrop-blur-md`}
    >
      <nav className="p-4">
        <ul className="flex gap-6 justify-center text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Something else</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
