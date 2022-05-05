import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Title = () => {
  return (
    <div>
        <h2>Title : R R R</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Director</Link>
            </li>
            <li>
              <Link to="Villain">Villain</Link>
            </li>
            <li>
              <Link to="Heroes">Heroes</Link>
            </li>
            <li>
              <Link to="Heroens">Heroens</Link>
            </li>
            <li>
              <Link to="musicDorector">Music Director</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
