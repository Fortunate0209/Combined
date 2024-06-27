import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  const navLink=[

    {
        name:'Register',
        path:'/register'
    },

    {
      name:'Signin',
      path:'/login'
  }, 
  {
    name:'Dashboard',
    path:'/dashboard'
}, 
  ]
  return (
    <div >
        <ul className='d-flex justify-content-between border border-2 p-3 bg-warning shadow'>
          <div className='leftBar'>
            <Link className='leftBar' to='/'>Home</Link>
            <Link className='leftBar' to='/about'>About</Link>
            <Link className='leftBar' to='/feature'>Features</Link>
            <Link className='leftBar' to='/pricing'>Pricing</Link>
            <Link className='leftBar' to='/user'>User</Link>
          </div>
          <div className='d-flex gap-3'>
          {navLink.map((link)=>(
            <li key={link.name}>
              <Link to={link.path} className='link'>{link.name}</Link>
            </li>
          

          ))
          }
          </div>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav