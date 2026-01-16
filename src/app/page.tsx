"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import WhereAmI from "../components/WhereAmI";


export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About / Summary Section */}
      <AboutMe />


      {/* Skills Section */}
      <Skills />

      {/* Certifications Section */}
      {/* <Certifications /> */}

      {/* Experience Section */}
      {/* <Experience /> */}

      {/* Education Section */}
      {/* <Education /> */}

      <WhereAmI />

      {/* Contact Section */}
      <Contact />
       
    </main>
  );
}
