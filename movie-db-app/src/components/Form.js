import React from 'react'
import { useGlobalContext } from '../context'
const Form = () => {
    const { searchTerm, handleChange } = useGlobalContext()
    return (
        <form className='search-form'>
            <h2>Search Movies</h2>
            <input placeholder='avengers' onChange={handleChange} type="text" className='form-input' value={searchTerm} />
        </form>
    )
}

export default Form
