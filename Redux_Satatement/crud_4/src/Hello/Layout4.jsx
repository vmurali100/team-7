import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout4 = () => {
  return (
    <div>
      <h2>Layout Struture</h2>
      <nav>
        <ul>
          <li><Link to="/">Home4</Link></li>
          <li><Link to="/crudro">Crud-Ro</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/sections">Sections</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
