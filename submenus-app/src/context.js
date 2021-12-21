import React, { useState, useEffect, useContext } from "react";

import sublinks from "./data";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {


    return (
        <AppContext.Provider value={
            {

            }
        } >
            {children}
        </AppContext.Provider>
    )
}

//custom context hook
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, useGlobalContext, AppProvider }