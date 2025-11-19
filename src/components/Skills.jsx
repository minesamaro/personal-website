"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillsPacman() {
  const gridSize = 7; // bigger grid for more flowers
  const [pacmanPos, setPacmanPos] = useState({ x: 0, y: 0 });
  const [eaten, setEaten] = useState({});
  const [skillList, setSkillList] = useState([]);

  // Many more skills!
  const flowers = {
    "1-2": "Python",
    "3-1": "Interpersonal Communication",
    "4-3": "Conflict Resolution",
    "5-5": "Data Analysis",
    "2-4": "Leadership",
    "6-2": "Teamwork",
    "0-6": "Problem Solving",
    "3-6": "Critical Thinking",
  };

  // Prevent arrow keys from scrolling the page
  useEffect(() => {
    const preventScroll = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", preventScroll, { passive: false });
    return () => window.removeEventListener("keydown", preventScroll);
  }, []);

  // Movement logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      setPacmanPos((prev) => {
        let { x, y } = prev;

        if (e.key === "ArrowUp" && y > 0) y--;
        if (e.key === "ArrowDown" && y < gridSize - 1) y++;
        if (e.key === "ArrowLeft" && x > 0) x--;
        if (e.key === "ArrowRight" && x < gridSize - 1) x++;

        return { x, y };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Eating logic
  useEffect(() => {
    const cellKey = `${pacmanPos.x}-${pacmanPos.y}`;
    if (flowers[cellKey] && !eaten[cellKey]) {
      setEaten((prev) => ({ ...prev, [cellKey]: true }));
      setSkillList((prev) => [...prev, flowers[cellKey]]);
    }
  }, [pacmanPos]);

  return (
    <section id="skills" className="py-16 px-16 bg-gray-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-8">Top Skills — Ghost Edition</h2>

      {/* Wrapper for board + eaten skills */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">

            {/* Game Board Card */}
            <div className="max-w-md w-full p-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="p-2 bg-white/20 rounded-lg flex justify-center">
                {/* Grid adjusts to container size */}
                <div className="grid grid-cols-7 gap-2 w-full">
                {[...Array(gridSize)].map((_, y) =>
                    [...Array(gridSize)].map((_, x) => {
                    const key = `${x}-${y}`;
                    const hasFlower = flowers[key] && !eaten[key];
                    const isPacman = pacmanPos.x === x && pacmanPos.y === y;

                    return (
                        <div
                        key={key}
                        className="relative w-full aspect-square bg-white rounded-md shadow-sm flex items-center justify-center"
                        >
                        {hasFlower && <span className="text-2xl">🌸</span>}
                        {isPacman && <span className="text-3xl">👻</span>}
                        </div>
                    );
                    })
                )}
                </div>
            </div>
            </div>

            {/* Eaten Skills List */}
            <div className="w-48 flex flex-col items-center mt-6 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Skills Unlocked</h3>

            <ul className="space-y-3 w-full">
                {skillList.length === 0 && (
                <li className="text-gray-400 text-sm text-center">
                    Eat flowers to reveal skills 🌸
                </li>
                )}

                {skillList.map((skill, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-purple-600 text-white font-semibold text-center text-base md:text-lg px-4 py-2 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
                >
                    {skill}
                </motion.li>
                ))}
            </ul>
            </div>
        </div>

      {/* Instructions */}
      <p className="mt-6 text-sm text-white/600">
        Use the arrow keys to guide the Ghost 👻 and collect skills!
      </p>
    </section>
  );
}
