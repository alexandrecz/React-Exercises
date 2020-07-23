import React from 'react';


function Hello({library, message, number}) {
  return (
    <div>
      <h1>Welcome to {library}</h1>      
      <p>{message}</p>
      <p>{number}</p>
    </div>
  ) 
}  

function Lake({name}) {
  return <h1>{name}</h1>
}

function Composing() {  

  return (
    <div>
      <Hello library="React" message="Alohha" number={10}/>
      <Lake name="Lake Tahoe"/>
      <Lake name="Angora Tahoe"/>
      <Lake name="Sir Tahoe"/>
    </div>
  )
}

export default Composing;