import React, { useState, useContext } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    //state for sidebar
    const [showSidebar, setShowSidebar] = useState(false);
    //state for modal
    const [showModal, setShowModal] = useState(false);

    // SIDEBAR
    const openSidebar = () => {
        setShowSidebar(true);
    }

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    //MODAL
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <AppContext.Provider
            value={
                {
                    showSidebar,
                    openSidebar,
                    closeSidebar,
                    showModal,
                    openModal,
                    closeModal
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