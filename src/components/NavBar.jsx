import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div>
            <ul>
                <li>
            <Link to="/">Pitch</Link>
                </li>
                <li>
            <Link to="/">Reports</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default NavBar