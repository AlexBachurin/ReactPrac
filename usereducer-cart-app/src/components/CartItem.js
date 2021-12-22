import React from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
const CartItem = ({ id, title, price, img, amount }) => {
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <p className='item-price'>${price}</p>
                <button className='remove-btn'>remove</button>
            </div>
            <div>
                <button className="amount-btn"><MdKeyboardArrowUp /></button>
                <p className='amount'>{amount}</p>
                <button className="amount-btn"><MdKeyboardArrowDown /></button>
            </div>
        </article>
    )
}

export default CartItem
