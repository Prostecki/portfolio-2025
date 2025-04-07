import { useState, useEffect, useRef } from "react";

export default function Header({ scrollToAbout, scrollToExperience }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Реф для хедера
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, прокручена ли страница больше чем на 50px
      if (window.scrollY > 1) {
        setIsScrolled(true); // Применяем новый стиль, когда прокручено больше 50px
      } else {
        setIsScrolled(false);
      }
    };

    // Добавляем обработчик события на прокрутку
    window.addEventListener("scroll", handleScroll);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        transition: "background-color 0.3s ease-in-out",
      }}
      className={`flex w-full fixed justify-between items-center p-4 drop-shadow-sm z-20 text-slate-800 text-md transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <img
        src="src/assets/logo.png"
        alt="logo"
        className="w-12 rounded-full border drop-shadow-lg max-md:hidden"
      />
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 bg-white rounded-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div
        className={`flex-col absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out z-30 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <a
          href="#"
          onClick={() => {
            scrollToAbout();
            setMenuOpen(false);
          }}
          className="p-4 border-b"
        >
          About
        </a>
        <a
          href="#"
          onClick={() => {
            scrollToExperience();
            setMenuOpen(false);
          }}
          className="p-4 border-b"
        >
          Experience
        </a>
        <a href="#" className="p-4 border-b text-red">
          Skills
        </a>
        <a href="#" className="p-4 border-b">
          Project
        </a>
        <a href="#" className="p-4 border-b">
          Contact
        </a>
        <a href="#" className="p-4 border-b">
          CV
        </a>
      </div>

      <div
        className={`max-md:hidden md:flex max-md:flex-col max-md:gap-3 justify-between transition-all duration-200 items-center w-1/2 nav-links ${
          isScrolled ? "text-black" : "text-blue-500"
        }`}
      >
        <a href="#">Home</a>
        <a href="#" onClick={scrollToAbout}>
          About
        </a>
        <a href="#" onClick={scrollToExperience}>
          Experience
        </a>
        <a href="#">Skills</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
        <a href="#">CV</a>
      </div>
    </header>
  );
}
