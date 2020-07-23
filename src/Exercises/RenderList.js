import React from 'react';

function RenderList() {  

  const lakes = [
    "Lake Tahoe",
    "Angora Tahoe",
    "Sir Tahoe"
  ] 

  return (
    <ul>
       {lakes.map(lake => (
        <li>{lake}</li>
      ))}
    </ul>
  )
}

export default RenderList;