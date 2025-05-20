import "./App.css";
import { useRef } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/techStack/TechStack";
import Projects from "./components/projects/Projects";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const techStackRef = useRef();
  const projectsRef = useRef();
  const getInTouchRef = useRef();

  return (
    <>
      <Header
        scrollTo={{
          homeRef,
          aboutRef,
          experienceRef,
          techStackRef,
          projectsRef,
          getInTouchRef,
        }}
      />
      <main className="flex flex-col items-center dark:background-test bg-gray-100">
        <section ref={homeRef}>
          <Home
            scrollTo={{
              getInTouchRef,
            }}
          />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={techStackRef}>
          <TechStack />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={getInTouchRef}>
          <GetInTouch />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
