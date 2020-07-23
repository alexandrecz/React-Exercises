import React, {useState, useEffect} from 'react';

function Effect() {  

  const [checked, setCheckbox] = useState(false);
  useEffect(() => {
    console.log(
          "%cChecked",
          "text-transform: uppercase; padding: 10px; background: blue; color: white;",
          checked.toString()
        )
  })

  return (
    <>
      <input
          type="checkBox" 
          value={checked} 
          onChange={() =>
            setCheckbox(checked => !checked)
          }
        />
      {checked?"checked":"non-Checked"}
    </>
  )
}

export default Effect;