import React from 'react';

function RenderListObject() {  

  const lakeList = [
    {id: "1", name:"Echo"},
    {id: "2", name:"Star"},
    {id: "3", name:"Planet"}
  ]

  return (
    <div >
       {lakeList.map(lake => (
         <div key={lake.id}>
           <h2>{lake.name}</h2>        
         </div>      
       ))}
    </div>
  )
}

export default RenderListObject;