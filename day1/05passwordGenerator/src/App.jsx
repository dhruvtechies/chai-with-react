import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLenght] = useState(8)
const [number, setNumber] = useState(false)

const [character, setCharacter] = useState(false)

const [password, setPassword] = useState('')

const passwordGenerator =() =>{  }

  return (
    <>
      <h1 className='text-4xl text-center' >Password Generator</h1>
    </>
  )
}

export default App
