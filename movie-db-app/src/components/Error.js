import React from 'react'
import { useGlobalContext } from '../context'
const Error = () => {
    const { error } = useGlobalContext();
    return (
        <div className='error'>
            {error.msg}
        </div>
    )
}

export default Error
