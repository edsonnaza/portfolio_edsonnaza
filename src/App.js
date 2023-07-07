import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import BAandProcess from "./components/BAandProcess";
import ScrumDevProcess from "./components/ScrumDevProcess";
import AbstractInterfaces from "./components/AbstractInterfaces";
import AccessModifiers from "./components/AccessModifiers";
 

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills /> 
      <BAandProcess />
      <ScrumDevProcess />
      <AbstractInterfaces /> 
      <AccessModifiers />
      <Testimonials />
      <Contact />
     
      
     
    </main>
  );
}
