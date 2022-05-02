import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export const Layout5 = () => {
  return (
    <div>
         <h1>Data Base Account :-</h1>
            <nav>
                <ul>
                    <li className='nav'>
                        <Link to="/" className='nav-link active'>Home</Link>
                    </li>

                    <li className='nav'>
                        <Link to="/menu" className='nav-link active'>Menu</Link>
                    </li>

                    <li className='nav'>
                        <Link to="/link" className='nav-link active'>Link</Link>
                    </li>

                    <li className='nav'>
                        <Link to="/file" className='nav-link active'>File</Link>
                    </li>

                    <li className='nav'>
                        <Link to="/About" className='nav-link active'>About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
    </div>
  )
}
