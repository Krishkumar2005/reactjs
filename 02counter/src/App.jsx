import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
    if(counter < 20){

      counter += 1
      setCounter(counter)
    }
    
    //i can write direct 
    //setCounter(counter + 1)
    console.log('counter', counter)
  }
  const removeValue = () => {
    if(counter > 0){
      counter -= 1
      setCounter(counter)
    }
    
    //i can write direct 
    //setCounter(counter - 1)
    console.log('counter', counter)
  }
  return (
    <>
      <h1>chai counter</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
