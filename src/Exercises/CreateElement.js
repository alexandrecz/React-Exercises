import React from 'react';

function CreateElement() {  

  return (
  
    React.createElement("h1",
        {
          style: { 
            background: "red", 
            color: "white",        
            padding: "10px"
          }
        },"Hello")
    );
}

export default CreateElement;