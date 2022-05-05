import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout1 = () => {
  return (
    <div>
      <h2>All Component</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/Gallary'>Gallary</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Menu'>Menu</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

