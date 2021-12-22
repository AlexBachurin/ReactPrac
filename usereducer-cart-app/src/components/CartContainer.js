import React from 'react'
import CartItem from './CartItem'

const CartContainer = () => {
    return (
        <section className='cart'>
            <header>
                <h2>Your Cart</h2>
            </header>
            <div>
                <CartItem />
            </div>
            <footer></footer>
        </section>
    )
}

export default CartContainer
