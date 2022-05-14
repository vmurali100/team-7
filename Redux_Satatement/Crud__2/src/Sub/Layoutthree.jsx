import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layoutthre = () => {
  return (
    <div>
        <h2>About Info Details</h2>
        <nav>
            <ul>
                <li><Link to="/">Homethree</Link></li>
                <li><Link to="/crudtest">Crud with Router</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/info">Info</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
