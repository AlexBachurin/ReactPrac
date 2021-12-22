import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <h3>UseReducer</h3>
                <div className="nav-container">
                    <FaShoppingCart />
                    <div className="amount-container">
                        <p className="total-amount">0</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
