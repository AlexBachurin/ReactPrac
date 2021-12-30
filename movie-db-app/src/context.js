import React, { useState, useEffect, useContext } from "react";

const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('batman');
    const [error, setError] = useState({ msg: '', type: '' });


    const url = `${API_KEY}&s=${searchTerm}`;

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            //set movies in state
            setMovies(data.Search);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies();

    }, [])
    return <AppContext.Provider value={{
        movies,
    }}>
        {children}
    </AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider };