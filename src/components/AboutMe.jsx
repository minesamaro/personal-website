"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const flashcards = [
  { title: "🎓 Education", content: "2nd year Master in Bioengineering (Biomedical Engineering) @ FEUP & ICBAS" },
  { title: "💻 Tech & Geek", content: "Biomedical Data Science, AI, Machine Learning, Web Development" },
  { title: "🌍 Languages & Culture", content: "English (Full Professional), Portuguese (Native), French (Limited)" },
  { title: "🏆 Experiences", content: "INESC Deep Learning Intern, IEEE EMBS Vice-Chair, HSDSLab Researcher" },
  { title: "⚡ Fun & Hobbies", content: "Sports, new hobbies, meeting people, traveling, always curious!" },
];

export default function AboutMe() {
  const [current, setCurrent] = useState(0);
  const [duckJump, setDuckJump] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % flashcards.length);
    setDuckJump(true);
    setTimeout(() => setDuckJump(false), 500);
  };

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Listen for SPACE key (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        nextCard();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobile]);

  return (
    <section id="about" className="py-16 bg-gray-900 flex justify-center">
      <motion.div
        className="relative z-10 w-[90%] max-w-xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl 
                   text-center p-6 md:p-12 hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>

        {/* Rubber duck */}
        <motion.div
        onClick={nextCard}
        animate={{ y: duckJump ? -32 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 11 }}
        className="flex flex-col items-center mb-6 cursor-pointer active:scale-90 transition"
        >
        <Image
            src="/rubber-duck.png"
            alt="Rubber Duck"
            width={80}
            height={80}
        />
        </motion.div>

        {/* Mobile/desktop instructions */}
        <div className="mb-4 text-white/80">
          {isMobile ? (
            <p className="text-sm italic">Tap the duck to flip my flashcards!</p>
          ) : (
            <p className="text-sm italic">Tap the duck or press SPACE to flip my flashcards!</p>
          )}
        </div>


        {/* Flashcard wrapper - perfectly centered */}
        <div className="flex items-center justify-center w-full mt-6">
        <div className="relative h-64 w-80 md:w-96 mx-auto perspective-1000">
            <AnimatePresence mode="wait">
            <motion.div
                key={current}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-md 
                            rounded-2xl shadow-lg p-6 text-left text-white/90 
                            [transform-style:preserve-3d] [backface-visibility:hidden]"
            >
                <h3 className="text-xl font-bold mb-2">{flashcards[current].title}</h3>
                <ul className="list-disc list-inside text-sm md:text-base">
                {flashcards[current].content.split(", ").map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </motion.div>
            </AnimatePresence>
        </div>
        </div>

        {/* Counter */}
        <p className="text-white/60 mt-4 text-sm md:text-base">
        {current + 1} / {flashcards.length}
        </p>
      </motion.div>
    </section>
  );
}