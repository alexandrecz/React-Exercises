import React from 'react';

function Fragment() {  

  const city = { name: "Austin", country: "USA" };
  const planet = { name: "Earth", system: "Solar" };
  
  return (
    //ReactFragment to wrap elements
    <>
      <h1 >{city.name} is in {city.country}!</h1>
      <h2 >{planet.name} is in {planet.system}!</h2>
    </>
  )
}

export default Fragment;