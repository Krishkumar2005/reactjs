import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)
    console.log(user)

    if(!user) return <div>Please Login Karo</div>
    return <div>Login Kar hi liye {user.username}</div>

}

export default Profile