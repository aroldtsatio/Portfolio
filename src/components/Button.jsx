import React from "react";


export default function Button() {
    const {isExpanded, setIsExpanded} = useState(false);
    
    const ToggleEvent = () => {
        setIsExpanded(!isExpanded);
       

        
    }
    return (

     <div className="bg-blue-200 p-4 rounded-lg shadow-md mt-20">   
       <div className="bg-gray-100 p-4 rounded shadow text-base leading-relaxed">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fugit tempora nobis excepturi! Dolorem incidunt perspiciatis suscipit, sapiente earum qui culpa expedita saepe facere sequi aut molestias obcaecati soluta ratione?</p>
       
        <button className="bg-blue-600 px-4 py-2 mt-3 rounded-full shadow-md hover:ring-4 hover:ring-white/50 transition-all duration-300 ease-in-out"
               onClick={ToggleEvent} >
            {isExpanded ? "Hide text" : "Show more"}
        </button>
        </div>

    </div>
    );
    }