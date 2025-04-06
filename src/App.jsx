import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import { useRef } from "react";

function App() {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("Элемент виден!");
  //         } else {
  //           console.log("Элемент не виден");
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   const currentElement = aboutRef.current;
  //   if (currentElement) observer.observe(currentElement);

  //   return () => {
  //     if (currentElement) observer.unobserve(currentElement);
  //   };
  // }, []);
  return (
    <>
      <Header scrollToAbout={scrollToAbout} />
      <main className="flex flex-col items-center">
        <Home />
        <About />
        <Experience />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
