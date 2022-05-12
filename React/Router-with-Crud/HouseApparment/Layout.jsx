import React from "react"
import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">GroudFloor</Link>
          </li>
          <li>
          <Link to="/firstfloor">firstfloor</Link>
          </li>
          <li>
          <Link to="/secondfloor">secondfloor</Link>
          </li>         
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
