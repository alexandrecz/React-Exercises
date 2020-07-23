import React from 'react';

function Properties() {  

  let city = {
    name: "Austin",
    country: "USA" 
  };

  return (
    <h1 id="head">{city.name} is in {city.country}!</h1>
  )
}

export default Properties;