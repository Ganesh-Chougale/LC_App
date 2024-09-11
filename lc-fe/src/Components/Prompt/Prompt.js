import React, { useState } from 'react'
import Straight from '../Straight/Straight';
import LGBTQ from '../LGBTQ/LGBTQ';

function Prompt() {

  const [selectOption, setSelectOption] = useState(null);

  const handleOptions = (something)=>{
    setSelectOption(something);
  }

  return (
    <div>
      <h1>Love Calculator</h1>
      <h5>select your orientation</h5>
      <button onClick={()=> handleOptions("straight")} >Straight</button>
      <button onClick={()=> handleOptions("lgbtq")} >LGBTQ+</button>

      {selectOption && (
        <div>
          {selectOption === "straight" ? (<Straight/>) : (<LGBTQ/>)}
        </div>
      )}
    </div>
  )
}

export default Prompt
