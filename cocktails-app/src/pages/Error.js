import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <section className='error-page'>
            <div className="error-container">
                <h2>Oops there is nothing here</h2>
                <Link to='/'>
                    <button className="btn primary-btn error-btn">
                        go home
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Error
