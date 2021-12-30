import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
import SingleMovie from './SingleMovie';
const Movies = () => {
    const { movies } = useGlobalContext();
    return (
        <section className='movies'>
            {movies.map(item => {
                return <SingleMovie key={item.imdbID} {...item} />
            })}
        </section>
    )
}

export default Movies
