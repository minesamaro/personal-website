"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Languages from "../components/Languages";
import WhereAmI from "../components/WhereAmI";
import { motion } from "framer-motion";


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
