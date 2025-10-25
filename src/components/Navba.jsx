// components/Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo / Nom */}
                        <div 
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => scrollToSection('header')}
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800">Arold Tsatio</span>
                        </div>

                        {/* Menu Desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
                            >
                                About Me
                            </button>
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
                            >
                                Skill
                            </button>
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
                            >
                                Project
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Menu Mobile Burger */}
                        <button 
                            className="md:hidden text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-2"
                            >
                                About Me
                            </button>
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-2"
                            >
                                Skill
                            </button>
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-2"
                            >
                                Project
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left text-blue-600 font-medium py-2"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Espace pour la navbar fixe */}
            <div className="h-20"></div>
        </>
    );
}