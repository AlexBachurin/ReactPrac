import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <a href="#">
                    <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" alt="logo" />
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
