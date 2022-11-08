import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div>
            <h2>NavBar:</h2>
            <ul>
                <li>
            <Link to="/">Pitch</Link>
                </li>
                <li>
            <Link to="/reports">Reports</Link>
                </li>
                <li>
            <Link to="/players">Players</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default NavBar