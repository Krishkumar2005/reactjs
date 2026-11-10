import { useState } from 'react'
import './App.css'
import ReactFlow from 'reactflow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ReactFlow>

        </ReactFlow>
      </div>
    </>
  )
}

export default App
