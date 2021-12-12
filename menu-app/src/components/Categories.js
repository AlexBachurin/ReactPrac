import React from 'react'

const Categories = ({ categories, filterByCategory }) => {
    return (
        <div className="btn-container">
            {categories.map(item => {
                return (
                    <button onClick={() => {
                        filterByCategory(item);
                    }} className="filter-btn">{item}</button>
                )
            })}
        </div>
    )
}

export default Categories
