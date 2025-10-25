// Header.jsx
import React from "react";

export default function Header() {
    console.log("Header.jsx");
    
    return (
        <header className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl border border-white/20 shadow-xl text-white p-6 flex flex-col items-center sticky top-8">
            <div className="relative mb-4">
                <img 
                    src="/src/assets/Profil.jpg" 
                    alt="Arold Awoubeng Tsatio" 
                    className="h-48 w-48 rounded-2xl object-cover border-4 border-white/30 shadow-lg" 
                />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold border-2 border-white">
                    🟢 Available
                </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center mb-2">Arold Awoubeng Tsatio</h1>
            <p className="text-blue-100 text-center mb-4">Full-Stack Developer</p>
            
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out font-semibold flex items-center gap-2">
                👋 Hello, World!
            </button>
            
            <div className="my-6 border-t border-blue-300/50 w-full"></div>
            
            <div className="space-y-4 w-full">
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors duration-200">
                    <div className="w-16 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xs font-bold text-white">🎂 AGE</span>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">22 years old</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors duration-200">
                    <div className="w-16 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xs font-bold text-white">📍 LOCATION</span>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Kaiserslautern, Germany</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors duration-200">
                    <div className="w-16 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xs font-bold text-white">⚽ HOBBIES</span>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Football</p>
                    </div>
                </div>
            </div>
            
            {/* Badges de langues */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">🇫🇷 French</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">🇩🇪 German</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">🇬🇧 English</span>
            </div>
        </header>
    );
}