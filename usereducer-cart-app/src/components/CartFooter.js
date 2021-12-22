import React from 'react'

const CartFooter = () => {
    return (
        <footer className='cart-footer'>
            <hr></hr>
            <div className="cart-total">
                <h4>total <span>$300</span></h4>
            </div>
            <button className="btn clear-btn">Clear cart</button>
        </footer>
    )
}

export default CartFooter
