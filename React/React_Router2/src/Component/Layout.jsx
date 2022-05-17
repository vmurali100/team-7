import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mp3">MP3 </Link></li>
          <li><Link to="/tamil">Tamil</Link></li>
          <li><Link to="/telugu">Telugu</Link></li>
          <li><Link to="/video">VideoSongs</Link> </li>       
         
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

