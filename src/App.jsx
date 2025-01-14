import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Home />
        <About />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}

export default App;
