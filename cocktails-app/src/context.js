import React, { useState, useEffect, useContext, useRef } from "react";


const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppProvider = ({ children }) => {
    //state for loading
    const [loading, setLoading] = useState(false)
    //state for drinks from data
    const [cocktails, setCocktails] = useState([]);
    //state for search term
    const [term, setTerm] = useState('');
    //ref for input
    const inputRef = useRef(null);

    //helper to fetch
    const getCocktails = async () => {
        try {
            setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const { drinks } = data;
            console.log(drinks)
            setCocktails(drinks);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    //fetch drinks on page load
    useEffect(() => {
        getCocktails();
        console.log(cocktails)
    }, [])
    return (
        <AppContext.Provider value={
            {
                loading,
                cocktails,
                term,
                inputRef
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

//custom hook for better use

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };