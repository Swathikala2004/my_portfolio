import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-right">
        <About />
      </div>

      <div data-aos="zoom-in">
        <Skills />
      </div>

      <div data-aos="fade-up">
        <Featured />
      </div>

      <div data-aos="fade-up">
        <Projects />
      </div>

      <div data-aos="fade-left">
        <Contact />
      </div>
    </>
  );
}

export default App;