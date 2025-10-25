
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Focus from './components/Focus';
import Language from './components/Language';
import Projects from './components/Projects';
import Navbat from './components/Navba';

function App() {
  console.log("App.jsx");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Header */}
          <div className="lg:col-span-1">
            <Header />
          </div>
          
          {/* Colonne de droite - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            <About />
            <Focus />
            <Language />
            <Projects /> 
            <Navbat />
          </div>
        </div>
      </div>
    </div>
  );    
}

export default App;