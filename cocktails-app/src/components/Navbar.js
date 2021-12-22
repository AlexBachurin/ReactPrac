import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Navbar = () => {
    const { resetTerm } = useGlobalContext();
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link onClick={resetTerm} to='/'>
                    <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" alt="logo" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link onClick={resetTerm} to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
