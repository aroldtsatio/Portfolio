import React, { useState } from "react";


export default function About() {
    const [show, setShow] = useState(false);
  
    return (
      <div className="bg-blue-200 p-4 rounded-lg shadow-md mt-20">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
  
        <p className="text-lg">
        👋 Hello there!
        My name is Arold Awoubeng Tsatio, and I live in Kaiserslautern, Germany. I'm a passionate and motivated junior Full-Stack Developer who enjoys creating modern websites, mobile applications, and games. Even though I’m still early in my journey, I’m constantly learning and growing, and I love transforming ideas into digital experiences that are both functional and visually appealing.
        </p>
  
        <button
          className="bg-blue-600 px-4 py-2 mt-3 rounded-full shadow-md hover:ring-4 hover:ring-white/50 transition-all duration-300 ease-in-out"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide text" : "Show more"}
        </button>
  
        {show && (
          <div className="mt-4 p-4 bg-gray-100 rounded shadow text-base leading-relaxed">
           What drives me is the excitement of building something from scratch and seeing it come to life. I enjoy working on both the front-end and back-end of projects, and I pay attention to clean design, intuitive interfaces, and user experience. As I continue to sharpen my skills, I'm particularly interested in working with modern technologies and exploring creative ways to solve real-world problems through code.

I speak three languages fluently – French, German, and English – which allows me to communicate with clients and collaborators from different backgrounds, understand their needs better, and bring a multicultural perspective to my projects.

Beyond coding, I have a strong interest in technology, innovation, and creativity. I enjoy diving into areas like UI/UX design, mobile game development, and I'm becoming increasingly curious about Web3, blockchain, and AI technologies, which I believe will shape the future of the digital world.

If you have an idea, big or small, and you're looking for someone passionate, dedicated, and ready to grow with your project, I’d love to hear from you. Let’s connect and create something amazing together. Your vision deserves to be brought to life – and I’m here to help make that happen.
          </div>
        )}
  
        <nav className="mt-6">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  