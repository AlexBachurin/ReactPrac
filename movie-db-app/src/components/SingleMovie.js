import React from 'react'
import { Link } from 'react-router-dom'
const SingleMovie = ({ Title: title, Year: year, Poster: image, imdbID: id }) => {
    return (
        <Link className='movie' to={`movie/${id}`}>
            <article>
                <img src={image} alt={title} />
                <div className="movie-info">
                    <h4 className='title'>{title}</h4>
                    <p>{year}</p>
                </div>
            </article>
        </Link>
    )
}

export default SingleMovie
