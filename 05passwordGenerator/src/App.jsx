import { useCallback, useEffect, useRef, useState } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setisNumberAllowed] = useState(false)
  const [isCharacterAllowed, setisCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumberAllowed) str += "0123456789"
    if(isCharacterAllowed) str += "!@#$%^&*()-_+={}[]~`"

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random()*str.length + 1) // plus one to include maximum index of string (52) bcoz range of random is 0 to less than 1
      pass += str.charAt(charIndex)
      
    }
    setPassword(pass)

  },
    [length, isNumberAllowed, isCharacterAllowed, setPassword]) // yahan pe function optimisation kar rhe hain

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=> {
     passwordGenerator()
  }, [length, isNumberAllowed, isCharacterAllowed, passwordGenerator])// yahan agar inme se koi change hua to function again run kar do 

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
      <h1 className="text-white text-center my-4">Pasword Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readonly 
            ref={passwordRef}   
        />
        <button className="outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
        
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
          id="slider"
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="slider">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              id="numberInput"
              onChange={() => {
                setisNumberAllowed(prev => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={setisCharacterAllowed}
              id="charInput"
              onChange={() => {
                setisCharacterAllowed(prev => !prev);
              }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    
    </>
  )
} 

export default App
