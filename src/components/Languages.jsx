"use client";
import { motion } from "framer-motion";

export default function Languages() {
  const languageList = [
    { flag: "🇬🇧", name: "English", level: "Full Professional" },
    { flag: "🇵🇹", name: "Portuguese", level: "Native or Bilingual" },
    { flag: "🇫🇷", name: "French", level: "Limited Working" },
  ];

  return (
    <section id="languages" className="py-16 bg-gray-900 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Languages</h2>

      <ul className="space-y-4 max-w-md mx-auto">
        {languageList.map((lang, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-md text-lg md:text-xl font-semibold hover:bg-white/20 transition"
          >
            <span className="text-2xl">{lang.flag}</span>
            <span>{lang.name} – {lang.level}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
