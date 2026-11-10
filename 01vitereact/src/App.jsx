import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log('App rendered')
  const [count, setCount] = useState(1)
  const [val, setVal] = useState({val:0})

  const click = () => {
    //setCount(1) //if i give primitive type same value  that is in the default then it will not re-render
    setVal({val:0}) // if i give non-primitive type value object same value  that is in the default then it will re-render
    //because it goes like reference of object not actual value and reference is change time to time.
  }

  useEffect(() => {},[val]) //ye dependency array me agar val pass karte hai to ye re-render hota rhega because it's reference value change hoti rhegi and app ki performance kharab ho jayegi
  useEffect(() => {},[val.val])// isliye object ke key ko use karte hai taki actual value change ho to re-render ho

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={click}>click</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} //curly braces me evaluated expression aata hai
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
