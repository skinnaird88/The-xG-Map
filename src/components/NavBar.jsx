import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-item'>
            <a href='/'><b>Pitch</b></a>
        </div>

        <div className='navbar-item'>
            <a href='/reports'><b>Reports</b></a>
        </div>

        <div className='navbar-item'>
            <a href='/players'><b>Add player</b></a>
        </div>

        <div className='navbar-item'>
            <a href='/teams'><b>Add team</b></a>
        </div>
    
        
    </nav>
  )
}

export default NavBar