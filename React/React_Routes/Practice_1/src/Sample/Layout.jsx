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
                    <Link to="Contact">Contact</Link>
                </li>
                <li>
                    <Link to="Gallary">Gallary</Link>
                </li>
                <li>
                    <Link to="Menu">Menu</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
