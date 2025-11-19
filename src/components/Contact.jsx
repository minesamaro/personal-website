"use client";

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white/90 py-10 px-6 md:px-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Contact Me</h2>
          <p className="text-white/70 mb-1 text-md">📧 22.maria.amaro@gmail.com</p>
          <p className="text-white/70 text-md">
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/mariaamaro22"
              target="_blank"
              className="text-purple-400 hover:text-purple-500 hover:underline transition"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Copyright / Footer Info */}
        <div className="text-white/60 text-sm md:text-base text-center md:text-right">
          <p>© {new Date().getFullYear()} Maria Amaro. All rights reserved.</p>
          <p>Made with ❤️ using Next.js & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
