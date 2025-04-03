import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  console.log("App.jsx");

  return (
   <div className='min-h-screen flex flex-col items-center justify-center bg-blue-700"'>
    <Header />
    <body className="bg-blue-200 p-4 rounded-lg shadow-md"></body>
   </div>

  );    
}

export default App;
