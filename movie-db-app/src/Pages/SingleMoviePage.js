import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

const SingleMovie = () => {
    const { id } = useParams();
    console.log(id);
    //state for fetched movie
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    // *** FETCH SINGLE MOVIE ***
    const fetchMovie = async () => {
        setLoading(true)
        try {
            const url = `${API_KEY}&i=${id}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            //destructure and add movie to state
            const { Title: title, Year: year, Plot: descr, Poster: image } = data;
            const newMovie = { title, year, descr, image };
            setMovie(newMovie);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchMovie();

    }, [id])
    if (loading) {
        return <Loading />
    }
    return (
        <section className='single-movie'>
            <img src={movie.image} alt={movie.title} />
            <div className="single-movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.descr}</p>
                <h4>{movie.year}</h4>
                <Link className="btn" to='/'>Back to Home</Link>
            </div>
        </section>
    )
}

export default SingleMovie
