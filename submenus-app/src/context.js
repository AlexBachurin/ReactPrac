import React, { useState, useEffect, useContext } from "react";

import sublinks from "./data";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //sidebar state
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    //open sidebar
    const openSidebar = () => {
        setisSideBarOpen(true);
    }
    //close sidebar
    const closeSidebar = () => {
        setisSideBarOpen(false);
    }
    return (
        <AppContext.Provider value={
            {
                isSideBarOpen,
                openSidebar,
                closeSidebar,
                sublinks
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