"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-24">

      {/* Floating background images */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Image 1 */}
        <motion.div
          className="absolute top-20 left-2 w-40 h-40 md:w-72 md:h-72 rounded-xl overflow-hidden opacity-40 md:opacity-60"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 25 }}
        >
          <Image src="/gallery11.jpg" alt="Gallery 1" fill className="object-cover" />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="absolute top-1/3 right-2 w-44 h-44 md:w-[28rem] md:h-[28rem] rounded-xl overflow-hidden opacity-35 md:opacity-55"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 30 }}
        >
          <Image src="/gallery12.jpg" alt="Gallery 2" fill className="object-cover" />
        </motion.div>

        {/* Image 3 */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-40 h-40 md:w-80 md:h-80 rounded-xl overflow-hidden opacity-40 md:opacity-55"
          animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 40 }}
        >
          <Image src="/gallery13.jpg" alt="Gallery 3" fill className="object-cover" />
        </motion.div>

      </div>

      {/* Main card */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 py-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl w-[90%] max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Profile picture */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white mb-6 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Maria Amaro"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>

        {/* Intro text */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Hi, I’m Maria 👋
        </h1>
        <p className="text-base md:text-xl text-white/90 mb-6 max-w-xl drop-shadow">
          Biomedical engineer. Data scientist. 
          <br />
          Building ML & web stuff.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}

