import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  console.log("App.jsx");

  return (
   <div className='flex flex-col items-start p-4 space-y-6 fixed top-0 left-0"'>
    <Header />
    <body className="bg-blue-200 p-4 rounded-lg shadow-md"></body>
   </div>

  );    
}

export default App;
