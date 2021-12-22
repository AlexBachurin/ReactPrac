import React from 'react'
import { useGlobalContext } from '../context'
const CartFooter = () => {
    const { clearCart, totalPrice } = useGlobalContext();
    return (
        <footer className='cart-footer'>
            <hr></hr>
            <div className="cart-total">
                <h4>total <span>${totalPrice}</span></h4>
            </div>
            <button onClick={clearCart} className="btn clear-btn">Clear cart</button>
        </footer>
    )
}

export default CartFooter
