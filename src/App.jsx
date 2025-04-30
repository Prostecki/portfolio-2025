import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center background-test">
        <Home />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}

export default App;
