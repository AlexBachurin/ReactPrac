import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
import CartFooter from './CartFooter';
const CartContainer = () => {
    const { cartItems } = useGlobalContext();
    console.log(cartItems);
    if (cartItems.length === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>Your Cart</h2>
                </header>
                <div>
                    <h4 className='empty-cart'>is currently empty</h4>
                </div>
            </section>
        )
    }
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
