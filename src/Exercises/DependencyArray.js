import React, {useState, useEffect} from 'react';

/**
 * Every time we make a change on the input
 * we`re going to collect the value and
 * be able to use. [val1]
 */
function DependencyArray() {  

  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.clear()
    console.log(
        "%cVAL1",
        "text-transform: uppercase; padding: 10px; background: blue; color: white;",
        `Field 1: ${val1}`
      )
  },[val1])

  useEffect(() => {
    console.clear()
    console.log(
        "%cVAL2",
        "text-transform: uppercase; padding: 10px; background: red; color: white;",
        `Field 1: ${val2}`
      )
  },[val2])

  return (
    <>
      <label>
        Field 1:
        <input
          
          value={val1} 
          onChange={
            e => setVal1(e.target.value)
          }
        />
      </label>
      
      <br/>

      <label>
        Field 2:
        <input          
          value={val2} 
          onChange={
            e => setVal2(e.target.value)
          }
        />
      </label>

    </> 
  )
}

export default DependencyArray;