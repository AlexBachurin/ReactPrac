import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
import CartFooter from './CartFooter';
const CartContainer = () => {
    const { cartItems } = useGlobalContext();
    console.log(cartItems);
    return (
        <section className='cart'>
            <header>
                <h2>Your Cart</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <CartFooter />
        </section>
    )
}

export default CartContainer
