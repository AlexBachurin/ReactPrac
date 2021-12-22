import React from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useGlobalContext } from '../context';
const CartItem = ({ id, title, price, img, amount }) => {
    const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <p className='item-price'>${price}</p>
                <button onClick={() => removeItem(id)} className='remove-btn'>remove</button>
            </div>
            <div>
                <button onClick={() => increaseAmount(id)} className="amount-btn"><MdKeyboardArrowUp /></button>
                <p className='amount'>{amount}</p>
                <button onClick={() => decreaseAmount(id)} className="amount-btn"><MdKeyboardArrowDown /></button>
            </div>
        </article>
    )
}

export default CartItem
