import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Navbar = () => {
    const { totalAmount } = useGlobalContext();
    return (
        <nav>
            <div className="nav-center">
                <h3>UseReducer</h3>
                <div className="nav-container">
                    <FaShoppingCart />
                    <div className="amount-container">
                        <p className="total-amount">{totalAmount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
