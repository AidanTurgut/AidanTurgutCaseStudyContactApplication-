import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>NHS Foundation Trust Contact Center</h1>
      <br />
      <br />
      <br />
      <p>Welcome! Please use the chat widget below to 
        chat with an available agent or call the following 
        number: xxx-xxx-xxxx
      </p>


    </>
  )
}

export default App
