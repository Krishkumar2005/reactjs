import { useState, useEffect } from 'react'
import authService from './appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice.js'
import { Header, Footer } from './components'
import {Outlet} from 'react-router-dom'
// import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData: userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.log("user not found", error);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return !loading ?(
    <div className='min-h-screen flex flex-wrap
    content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>) : null
}

export default App
