
import React, { useState } from 'react';

export default function About() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm text-gray-900 p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-lg">👨‍💻</span>
        About Me
      </h2>
      
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Hello there! 👋 My name is Arold and I live in Kaiserslautern, Germany. As a Full-Stack developer, 
        I love creating websites, apps, and mobile games that are not just functional but visually appealing. 
        My passion for clean design, UX, and interactive experiences drives everything I build.
      </p>

      {!show && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShow(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            📖 Show More
          </button>
        </div>
      )}

      {show && (
        <div className="mt-6 space-y-4 animate-fadeIn">
          <p className="text-lg leading-relaxed text-gray-700">
            I enjoy working on both the front-end and back-end, with a strong focus on user experience and creative problem-solving. 
            I'm especially interested in modern technologies like React, Tailwind, Web3, and AI.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I speak French, German, and English, which helps me work in international teams. 
            If you're looking for someone motivated and creative to collaborate with, let's build something awesome together!
          </p>

          <div className="text-center mt-6">
            <button
              onClick={() => setShow(false)}
              className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              📕 Show Less
            </button>
          </div>
        </div>
      )}
    </div>
  );
}