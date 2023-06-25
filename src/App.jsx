import React, { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { ThemeContext } from "./context/theme";

export default function App() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode === "light" ? "app light" : "app dark"}>
      <div className="container">
        <Navbar />
        <div className="sections">
          <Intro />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
