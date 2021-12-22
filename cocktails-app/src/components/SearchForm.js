import React from 'react'

const SearchForm = () => {
    return (
        <section className="section search">
            <form className="search-form">
                <div className="form-control">
                    <label htmlFor="name">Search Your Favorite cocktail</label>
                    <input type="text" id='name' name='name' />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
