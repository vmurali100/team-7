import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <h2>Layout</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="menu">Menu</Link>
                </li>
                <li>
                    <Link to="phone">Phone</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
