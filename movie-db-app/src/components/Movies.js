import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import SingleMovie from './SingleMovie';
const Movies = () => {
    const { movies, loading, error } = useGlobalContext();
    //if loading or error in response
    if (loading || error.status === true) {
        return <Loading />
    }
    return (
        <section className='movies'>
            {movies.map(item => {
                return <SingleMovie key={item.imdbID} {...item} />
            })}
        </section>
    )
}

export default Movies
