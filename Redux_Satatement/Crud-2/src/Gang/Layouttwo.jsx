import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout2 = () => {
  return (
    <div>
        <h2>Compony Info.....!</h2>
        <nav>
            <ul>
                <li><Link to="/">Home 2</Link></li>
                <li><Link to="/crudsam">Crud With Router-2</Link></li>
                <li><Link to="data">Data-2</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
