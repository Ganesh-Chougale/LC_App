import React, { useState } from 'react';
import './Straight.css';
import Male from "./Male/Male";
import Female from './Female/Female';


function Straight() {

    const [gender, setGender] = useState(null);

    const handleClick = (something)=>{
        setGender(something);
    }

  return (
    <div className='straightMain'>

    <div className='genderOptions'>
    <h2>Select Your Gender</h2>
    <button onClick={()=> handleClick("male")} >Male</button>
    <button onClick={()=> handleClick("female")} >Female</button>
    </div>

    
        {gender && (
            <div>
                {gender === 'male' ? (<Male/>) : (<Female/>)}
            </div>
        )}

    </div>
  )
}

export default Straight
