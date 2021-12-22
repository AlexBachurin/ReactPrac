import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
const CartContainer = () => {
    const { data } = useGlobalContext();
    return (
        <section className='cart'>
            <header>
                <h2>Your Cart</h2>
            </header>
            <div>
                {data.map((item) => {
                    return <CartItem {...item} />
                })}
            </div>
            <footer></footer>
        </section>
    )
}

export default CartContainer
