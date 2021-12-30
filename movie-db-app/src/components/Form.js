import React from 'react'
import { useGlobalContext } from '../context'
import Error from './Error'
const Form = () => {
    const { searchTerm, handleChange, error } = useGlobalContext()
    return (
        <form className='search-form'>
            <h2>Search Movies</h2>
            <input placeholder='avengers' onChange={handleChange} type="text" className='form-input' value={searchTerm} />
            {error.status === true ? <Error /> : null}
        </form>
    )
}

export default Form
