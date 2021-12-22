import React, { useState, useEffect, useContext, useRef } from "react";


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //state for loading
    const [loading, setLoading] = useState(true)
    //state for drinks from data
    const [cocktails, setCocktails] = useState([]);
    //state for search term
    const [term, setTerm] = useState('');
    //ref for input
    const inputRef = useRef(null);
    // //state for display error if we cant find drink
    // const [isError, setIsError] = useState(false);

    //search handler
    const searchHandler = (e) => {
        const value = e.target.value;
        setTerm(value);

    }
    //modify url with searchTerm
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`;

    //helper to fetch
    const getCocktails = async () => {
        try {
            setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const { drinks } = data;
            // !!! if we have drinks when set it to state, if not set to empty array or we will get white screen
            if (drinks) {
                setCocktails(drinks);
            } else {
                setCocktails([])
            }
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
        setLoading(false)
    }
    //fetch drinks on page load and every time term changes
    useEffect(() => {
        getCocktails();
        console.log(cocktails)
    }, [term])
    return (
        <AppContext.Provider value={
            {
                loading,
                cocktails,
                term,
                inputRef,
                searchHandler
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