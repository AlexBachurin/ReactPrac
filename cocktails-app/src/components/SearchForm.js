import React from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
    const { inputRef, searchHandler } = useGlobalContext();
    return (
        <section className="section search">
            <form className="search-form">
                <div className="form-control">
                    <label htmlFor="name">Search Your Favorite cocktail</label>
                    <input onChange={searchHandler} ref={inputRef} type="text" id='name' name='name' />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
