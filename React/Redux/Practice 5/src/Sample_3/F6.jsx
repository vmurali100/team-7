import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const F6 = () => {
  return (
    <div>
        <h2>All Tourist Places in Andhra Pradhesh</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/">Andhra Pradhesh</Link>
                </li>
                <li>
                    <Link to="Visakhapatnam">Visakhapatnam</Link>
                </li>
                <li>
                    <Link to="Tirupati">Tirupati</Link>
                </li>
                <li>
                    <Link to="Vijayawada">Vijayawada</Link>
                </li>
                <li>
                    <Link to="ArakuValley">Araku Valley</Link>
                </li>
                <li>
                    <Link to="Srisailam">Srisailam</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
