import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Navbar = () => {

    const { openSidebar, getLocation } = useGlobalContext();
    return (
        <nav className='nav'>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/13-stripe-submenus/setup/src/images/logo.svg" alt="logo" className="nav-logo" />
                    <button onClick={openSidebar} className='btn toggle-btn'><FaBars /></button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button onMouseOver={getLocation} className='link-btn'>products</button>
                    </li>
                    <li>
                        <button onMouseOver={getLocation} className='link-btn'>developers</button>
                    </li>
                    <li>
                        <button onMouseOver={getLocation} className='link-btn'>company</button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
