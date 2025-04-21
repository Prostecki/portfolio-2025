import "./App.css";
import { useRef } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home.jsx";
import About from "./Components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const scrollToExperience = () => {
    setTimeout(() => {
      experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToExperience={scrollToExperience}
      />
      <main className="flex flex-col items-center bg-[#04081A]">
        <Home />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <TechStack />
        <Projects />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}

export default App;
