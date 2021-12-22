import React from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
const CartItem = () => {
    return (
        <article className='cart-item'>
            <img src="https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png" alt="phone" />
            <div>
                <h4>Samsung Galaxy s8</h4>
                <p className='item-price'>$388</p>
                <button className='remove-btn'>remove</button>
            </div>
            <div>
                <button className="amount-btn"><MdKeyboardArrowUp /></button>
                <p className='amount'>1</p>
                <button className="amount-btn"><MdKeyboardArrowDown /></button>
            </div>
        </article>
    )
}

export default CartItem
