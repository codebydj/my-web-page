import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import MiniProjects from "./components/MiniProjects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-dark-900 text-white min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="projects">
            <FeaturedProjects />
          </section>
          <section id="mini-projects">
            <MiniProjects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="stats">
            <Stats />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
