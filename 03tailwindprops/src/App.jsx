import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "krish",
    age: 21,
  }

  const btnText = "Visit More"

  return (
    <>
      <h1 className='bg-blue-500 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card name="krish" myArr={[1,2]} myObj={myObj}/>
      <Card btnContent={btnText}/>
    </>
  )
}

export default App
