import React, { useState } from 'react'
import './Male.css'

function Male() {

  const [mName, setMname] = useState("");
  const [fName, setFname] = useState("");

  const randomNumber = Math.floor(Math.random() * 11) + 20;
  const score = ((mName.length + fName.length)*2)+randomNumber;

  const handleMale = (e)=>{
    setMname(e.target.value);
  }
  const handleFemale = (e)=>{
    setFname(e.target.value)
  }

  const handleClick = (e)=>{
    // e.preventDefault();
    alert(`${mName} have ${score}% more chances to stick together with ${fName}`);

  }
  return (
    <div className='maleMain'>
          <form action="">
    <div className='fcd'> 
        <label htmlFor="sname">Enter Your Name</label>
        <input type="text" id="sname" placeholder='Please input full name for better result' 
        onChange={handleMale}
         />
    </div>
    <div className='fcd'>
        <label htmlFor="pname">Enter Partner Name</label>
        <input type="text" id="pname" placeholder='Please input full name for better result' 
        onChange={handleFemale}
         />
    </div>
    <div className='fcd'>
        <button
        onClick={handleClick}
        >Love Score</button>
    </div>
    </form>

    </div>
  )
}

export default Male
