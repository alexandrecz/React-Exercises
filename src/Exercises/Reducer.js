import React, {
  useReducer  
} from 'react';

function Reducer() {  

  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  

  return (
    <>
      <input
          type="checkBox" 
          value={checked} 
          onChange={toggle}
        />
      {checked?"checked":"non-Checked"}
    </>
  )
}

export default Reducer;