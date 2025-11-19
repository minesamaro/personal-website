"use client";

export default function Certifications() {
  const certifications = [
    "“Youth Bike Lovers” – Youth Exchange",
    "“Focus” Youth Exchange ERASMUS",
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-900 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications & Exchanges</h2>
      <ul className="space-y-2 text-white/80 text-lg">
        {certifications.map((cert, index) => (
          <li key={index} className="bg-white/10 backdrop-blur-md rounded-xl py-2 px-4 shadow-md hover:bg-white/20 transition">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}
