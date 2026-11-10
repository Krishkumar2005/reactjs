import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  //The useLoaderData hook in React Router v6 and Remix is used to retrieve data that's been loaded by a route's loader function. 
  // This data is made available to components before they are rendered, improving performance and user experience. 
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/krishkumar2005')
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log(data);
  //       setData(data)
  //   })
  // })
  return (
    <div className='bg-blue-950 text-white text-3xl text-center m-4 p-4'>Github Followers: {data.followers}
     <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/krishkumar2005')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}