```javascript
import './App.css';
import Prompt from './Components/Prompt/Prompt';

function App() {
  return (
    <div className="App">
      <Prompt />
    </div>
  );
}

export default App;
```
```javascript
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
```
```javascript
import React, { useState } from 'react'
import './Male.css'

function Male() {

  const [mName, setMname] = useState("");
  const [fName, setFname] = useState("");

  const handleMale = (e)=>{
    setMname(e.target.value);
  }
  const handleFemale = (e)=>{
    setFname(e.target.value)
  }

  const handleClick = (e)=>{
    e.preventDefault();
    alert(`${mName} ${fName}`);
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
```
```javascript
import React, { useState } from 'react'

function Female() {

  const [mName, setMname] = useState("");
  const [fName, setFname] = useState("");

  const handleMale = (e)=>{
    setMname(e.target.value);
  }
  const handleFemale = (e)=>{
    setFname(e.target.value)
  }

  const handleClick = (e)=>{
    e.preventDefault();
    alert(`${mName} ${fName}`);
  }

  return (
    <div className='femaleMain'>
          <form action="">
    <div className='fcd'> 
        <label htmlFor="sname">Enter Your Name</label>
        <input type="text" id="sname" placeholder='Please input full name for better result' 
        onChange={handleFemale}
         />
    </div>
    <div className='fcd'>
        <label htmlFor="pname">Enter Partner Name</label>
        <input type="text" id="pname" placeholder='Please input full name for better result' 
        onChange={handleMale}
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

export default Female
```
```javascript
import React from 'react'

function LGBTQ() {
  return (
    <div>
      <p>The Love Calculator is currently designed for straight users.</p>
    </div>
  )
}

export default LGBTQ
```
```javascript

```