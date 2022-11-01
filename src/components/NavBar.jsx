import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div>
            <ul>
                <li>
            <Link to="/">Pitch</Link>
                </li>
                <li>
            <Link to="/reports">Reports</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default NavBar