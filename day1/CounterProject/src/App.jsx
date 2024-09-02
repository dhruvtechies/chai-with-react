import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)//let/const [variablename,functionname]=hooksname (defaultvalueif you want)     isse hum ek varibale me change karene se sabhi jage changes kar deta h jese yaha pr counter variable  se hum kar rahe 

  const addvalue=() =>{
    setCounter(counter+1);}

    const removevalue=() =>{
      setCounter (counter-1);
    }
    return (
      <>
     <h1>chai with hooks</h1>
  
     <h2>countervalue: {counter}</h2>
  
     <button onClick={addvalue}>Add value:{counter}</button>
     <br/>
     <button onClick={removevalue}>Remove Value:{counter}</button>
     <p>footer:{counter}</p>
  
     </>)
  }
  


export default App
