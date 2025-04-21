// Removed unused hooks and motion import
import { Link } from "react-router-dom";

export default function Header() {
  // Header is fixed at the top with no animation or scroll handling

  return (
    <header
      className="fixed top-10 left-0 right-0 mx-auto w-11/12 max-w-2xl z-50 overflow-x-hidden bg-gray-400 bg-transparent drop-shadow-lg backdrop-blur-md"
      style={{
        border: "2px solid gray",
        borderRadius: "30px",
      }}
    >
      <nav className="p-4">
        <ul className="flex gap-6 justify-center text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/techstack">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
