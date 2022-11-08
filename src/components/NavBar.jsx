import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-item'>
            <Link to="/">Pitch</Link>
        </div>

        <div className='navbar-item'>
            <Link to="/reports">Reports</Link>
        </div>
        
        <div className='navbar-item'>
            <Link to="/players">Players</Link>
        </div>
    
        
    </nav>
  )
}

export default NavBar