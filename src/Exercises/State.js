import React, { useState } from 'react';

function State() {  

  const [year, setYear] = useState(2020);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("OPEN");
  
  return (
    //ReactFragment to wrap elements
    <>
      <div>
         <h1>
           Year: {year}
         </h1>
         <button onClick={()=> setYear(year + 1)}>
           New Year
         </button>
       </div>
       <div>
         <h1>
           Manager on Duty: {manager}
         </h1>
         <button onClick={()=> setManager("Adri")}>
           New Manager
         </button>
       </div>
       <div>
         <h1>Status: {status}</h1>
         <button onClick={()=> setStatus("COPEN")}>
           Open
         </button>
         <button onClick={()=> setStatus("Back in 5 minutes")}>
           Break
         </button>
         <button onClick={()=> setStatus("CLOSED")}>
           Close
         </button>
       </div>
    </>
  )
}

export default State;