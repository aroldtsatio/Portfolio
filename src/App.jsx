import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';

function App() {
  console.log("App.jsx");

  return (
   <div className='flex flex-col items-start p-3 space-y-6 top-0 left-0  flex flex-row items-start gap-6 p-6'>
    <Header />
    <About />
    <body className="bg-blue-200   "></body>
   
   </div>
  

  );    
}

export default App;
