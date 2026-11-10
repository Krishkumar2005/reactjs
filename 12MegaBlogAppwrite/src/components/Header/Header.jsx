import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate() //works like redirect
  const navItems = [
    //"slug" refers to a portion of a URL that acts as a unique identifier for a specific page or resource on a website.
    {
      name: 'Home',
      slug: "/", // slug = url 
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]

  return (
    <header className='bg-gray-500 py-3 shadow'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item) => (
                item.active ? (
                  <li key={item.name}>
                    <button 
                    className='inline-block px-6 py-2
                    duration-200 hover:bg-blue-100 rounded-full'
                     onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ): null
              ))
            }
            {
              authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header