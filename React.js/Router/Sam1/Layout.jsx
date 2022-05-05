import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <h2>Sadik Componay</h2>
        <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contacts</Link>
            </li>
            <li>
                <Link to='/photo'>photo</Link>
            </li>
            <li>
                <Link to='/suri'>suri</Link>
            </li>
           
        </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
