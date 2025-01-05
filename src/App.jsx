import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Home />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;
