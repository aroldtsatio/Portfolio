import React from "react";
const projects = [
  {
    title: "Login-Page",
    description:
      "This is a sleek and modern login page built with HTML and CSS. It features a fully responsive layout, smooth animations, and a clean user interface. Designed as part of my learning journey in web design and front-end development",
    github: "https://github.com/aroldtsatio/Login-Page.git",
    demo: "https://Portfolio-1-",
    technologies: ["HTML", "CSS"],
  },];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">🚀  Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-lg"
                >
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
