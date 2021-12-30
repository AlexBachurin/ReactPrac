import React, { useState, useEffect, useContext } from "react";

const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('rs');
    const [error, setError] = useState({ msg: '', status: false });





    // *** FETCH MOVIES ***
    const fetchMovies = async () => {
        const url = `${API_KEY}&s=${searchTerm}`;
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            //check response status for error if
            if (data.Response === 'True') {
                //set movies in state
                setMovies(data.Search);
                setLoading(false)
                setError({ status: false, msg: '' })
            } else if (data.Response === 'False') {
                //else set error to true and message to the type of the error
                setError({ status: true, msg: `${data.Error}` })
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies();

    }, [searchTerm])

    // *** HANDLE INPUT ***
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return <AppContext.Provider value={{
        movies,
        searchTerm,
        handleChange,
        loading,
        error
    }}>
        {children}
    </AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider };