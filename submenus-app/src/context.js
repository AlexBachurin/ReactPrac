import React, { useState, useEffect, useContext } from "react";

import sublinks from "./data";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //sidebar state
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    //Location of current hovered button for opening submenu
    const [location, setLocation] = useState({ center: '', bottom: '' });

    //open sidebar
    const openSidebar = () => {
        setisSideBarOpen(true);
    }
    //close sidebar
    const closeSidebar = () => {
        setisSideBarOpen(false);
    }

    //get Location
    const getLocation = (e) => {
        const target = e.target;
        const rectObj = target.getBoundingClientRect();
        console.log(rectObj);
        //calculate proper location to set submenu right on bottom of hovered button
        const center = (rectObj.left + rectObj.right) / 2
        const bottom = rectObj.bottom - 3;
        setLocation({ center, bottom })
    }
    return (
        <AppContext.Provider value={
            {
                isSideBarOpen,
                openSidebar,
                closeSidebar,
                sublinks,
                getLocation
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