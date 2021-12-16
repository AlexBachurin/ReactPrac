import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
const List = ({ list, deleteItem }) => {
    return (
        <div className='grocery-list'>
            {list.map(item => {
                return (
                    <article key={item.id} className='grocery-item'>
                        <p className="title">{item.value}</p>
                        <div className="btn-container">
                            <button className="edit-btn">
                                <FaPencilAlt />
                            </button>
                            <button onClick={() => deleteItem(item.id)} className="delete-btn">
                                <FaTrashAlt />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default List
