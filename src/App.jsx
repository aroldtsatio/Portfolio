import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Button from './components/Button';
function App() {
  console.log("App.jsx");

  return (
   <div className='flex flex-col items-start p-3 space-y-6 fixed top-0 left-0"'>
    <Header />
    <About />
    <body className="bg-blue-200  rounded-lg shadow-md"></body>
    <Button />
   </div>
  

  );    
}

export default App;
