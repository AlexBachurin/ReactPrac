import React, { useState, useRef, useContext } from "react";

import sublinks from "./data";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //sidebar state
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    //Location of current hovered button for opening submenu
    const [location, setLocation] = useState({ center: '', bottom: '' });
    //name of current hovered button 
    const [pageName, setPageName] = useState('');
    //state for submenu
    const [submenuPage, setSubmenuPage] = useState({ page: '', links: [] });
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    //open sidebar
    const openSidebar = () => {
        setisSideBarOpen(true);
    }
    //close sidebar
    const closeSidebar = () => {
        setisSideBarOpen(false);
    }

    //**Submenu */
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    //get location of hovered button, button name which is hovered, and open submenu
    const handleButtonHover = (e) => {
        const target = e.target;
        const rectObj = target.getBoundingClientRect();
        console.log(rectObj);
        //calculate proper location to set submenu right on bottom of hovered button
        const center = (rectObj.left + rectObj.right) / 2
        const bottom = rectObj.bottom - 3;
        //set name of current hovered page
        const name = e.target.textContent;
        setPageName(name);
        setLocation({ center, bottom })
        //find right submenu page in data array to display
        const page = sublinks.find(item => {
            return item.page === name;
        })
        setSubmenuPage(page)
        //and finally show submenu
        setIsSubmenuOpen(true);
        console.log(page);
    }
    return (
        <AppContext.Provider value={
            {
                isSideBarOpen,
                openSidebar,
                closeSidebar,
                sublinks,
                handleButtonHover,
                pageName,
                location,
                isSubmenuOpen,
                submenuPage,
                closeSubmenu
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