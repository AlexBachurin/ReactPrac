import React, { useState, useEffect, useContext } from "react";

const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API_KEY}&`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{

    }}>
        {children}
    </AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider };