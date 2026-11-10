import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({
    children, authentication = true
}) {
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)
    const authStatus = useSelector((state) => state.auth.isAuthenticated)
    useEffect(() => {

        //TODO: make it more easy to understand

        // if(authStatus === true){
        //     navigate("/")
        // }else if (authStatus === false){
        //     navigate("/login")
        // }

        //let authValue = authStatus === true ? true : false
        //we can write at the place of authStatus !== authentication is authValue

        if(authentication && authStatus !== authentication){
            navigate("/login") // true && false !== true
        } else if(!authentication && authStatus !== authentication){
            navigate("/") // !true && true !== true
        }
        setloader(false)
    }, [authStatus, navigate, authentication])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

