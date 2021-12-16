import React, { useState, useContext } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    //state for sidebar
    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true);
    }

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    return (
        <AppContext.Provider
            value={
                {
                    showSidebar,
                    openSidebar,
                    closeSidebar,
                }

            }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }