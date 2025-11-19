"use client";

export default function Experience() {
  const experiences = [
    {
      title: "INESC Technology and Science – Deep Learning Research Intern",
      date: "Feb 2023 - Present | Porto, Portugal",
      desc: "Lung Cancer Survival Analysis using Imaging and Clinical Data Labels. Using Imaging and Semantic data to predict survival of cancer patients using AI Neural Networks."
    },
    {
      title: "IEEE UP Student Branch – Vice-Chair EMBS Chapter",
      date: "Aug 2024 - Jul 2025 | Porto, Portugal",
      desc: "Organizing talks for students about Medicine and Engineering. Developing Biomedical Engineering recreational projects."
    },
    {
      title: "HSDSLab – Visiting Student Researcher",
      date: "Sep 2024 - Jan 2025 | Budapest, Hungary",
      desc: "Developing Data Science and Biomedical Data Science solutions in academic research."
    },
    {
      title: "INESC Technology and Science – Computer Vision Research Intern",
      date: "Mar 2022 - Dec 2022 | Porto, Portugal",
      desc: "Empowering evaluation of intestinal biomarkers using AI for fish health assessment. Applied Computer Vision tools to optimize tissue biomarker analysis and improve aquaculture sustainability."
    },
    {
      title: "CINTESIS – Collaborator",
      date: "May 2021 - Feb 2022 | Porto, Portugal",
      desc: "Analysis of respiratory and ECG signals in newborn babies and correlation with sepsis."
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-800 text-white max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
            <p className="text-white/70 text-sm">{exp.date}</p>
            <p className="mt-2 text-white/80">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
