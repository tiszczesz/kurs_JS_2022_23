import React from 'react';
import { Link } from 'react-router-dom'

// type Props = {}

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>Strona główna</Link>
        <ul>
            <li>
                <Link to="/cw1">Ćwiczenie 1</Link>
            </li>
            <li>
                <Link to="/cw2">Ćwiczenie 2</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar;