import React from "react";
import SocialIcons from "./components/SocialIcons";
import Email from "./components/Email";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import PageLost from "./components/PageLost";

const App = () => {
  return (
    <div>
      <SocialIcons />
      <Email />
      <Header />
      <Hero />
      <About />
      <History />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
