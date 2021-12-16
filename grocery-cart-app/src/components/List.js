import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
const List = () => {
    return (
        <article className='grocery-item'>
            <p className="title">qwewqeq</p>
            <div className="btn-container">
                <button className="edit-btn">
                    <FaPencilAlt />
                </button>
                <button className="delete-btn">
                    <FaTrashAlt />
                </button>
            </div>
        </article>
    )
}

export default List
