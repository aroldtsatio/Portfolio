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
            <div className="my-6 border-t border-teal-600 w-full"></div>
           <div className="space-y-6">
  
             <div className="flex items-center space-x-4">
            <div className="w-20 h-14 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-white">AGE</span>
            </div>
           <div>
           <p className="text-xl font-bold">22 years old</p>
          </div>
          </div>

 
          <div className="flex items-center space-x-4">
          <div className="w-20 h-14 bg-blue-500 rounded-md flex items-center justify-center">
               <span className="text-sm font-bold text-white">Location</span>
          </div>
          <div>
          <p className="text-xl font-bold">Kaiserslautern, Germany</p>
          </div>
          </div>

  
          <div className="flex items-center space-x-4">
          <div className="w-20 h-14 bg-blue-500 rounded-md flex items-center justify-center">
          <span className="text-sm font-bold text-white">Hobbys</span>
          </div>
          <div>
          <p className="text-xl font-bold">Football</p>
         </div>
          </div>
        </div>
            
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