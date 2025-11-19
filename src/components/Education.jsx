"use client";

export default function Education() {
  const educations = [
    {
      name: "Faculdade de Engenharia da Universidade do Porto",
      year: "(2020 - 2025)",
      degree: "Integrated Masters in Bioengineering, Biomedical Engineering"
    },
    {
      name: "ICBAS - Instituto de Ciências Biomédicas Abel Salazar",
      year: "(2020 - 2025)",
      degree: "Integrated Masters in Bioengineering, Biomedical Engineering"
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-900 text-center text-white max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
      <ul className="space-y-6 text-lg">
        {educations.map((edu, index) => (
          <li key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
            <span className="font-semibold">{edu.name}</span> {edu.year}
            <br />
            {edu.degree}
          </li>
        ))}
      </ul>
    </section>
  );
}
