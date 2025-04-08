import React, { useState } from "react";




export default function About() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-cyan-800 text-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
      <p className="text-lg leading-relaxed">
        Hello there! 👋 My name is Arold and I live in Kaiserslautern, Germany. As a Full-Stack developer, I love creating websites, apps, and mobile games that are not just functional but visually appealing. My passion for clean design, UX, and interactive experiences drives everything I build.
      </p>

      {!show && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShow(true)}
            className="text-white font-semibold hover:underline focus:outline-none"
          >
            ↓ Show more ↓
          </button>
        </div>
      )}

      {show && (
        <div className="mt-6 text-base leading-relaxed text-white/90">
          <p>
            I enjoy working on both the front-end and back-end, with a strong focus on user experience and creative problem-solving. I'm especially interested in modern technologies like React, Tailwind, Web3, and AI.
          </p>
          <p className="mt-3">
            I speak French, German, and English, which helps me work in international teams. If you're looking for someone motivated and creative to collaborate with, let’s build something awesome together!
          </p>

          <div className="text-center mt-6">
            <button
              onClick={() => setShow(false)}
              className="text-white font-semibold hover:underline focus:outline-none"
            >
              ↑ Show less ↑
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
