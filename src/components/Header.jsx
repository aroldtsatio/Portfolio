import React from "react";

export default function Header() {
    console.log("Header.jsx");
    
    return (
        <div>
           <header className="bg-blue-300 rounded-[2vw] border-2 border-black  text-white p-4 flex flex-col items-center">
             <img src="\src\assets\Profil.jpg" alt="Logo" className="h-50 w-40 rounded-[2vw]" />
            <h1 className="text-2xl font-bold ">Arold Awoubeng Tsatio</h1>
            <button className="bg-blue-600 px-4 py-2 mt-3 rounded-full shadow-md hover:ring-4 hover:ring-white/50 transition-all duration-300 ease-in-out"> Hello, World !
            </button>
           
            
          </header>
        <nav>
            <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
        </div>  
    );
    }