import React, { useState, useContext, useRef } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    //state for sidebar
    const [showSidebar, setShowSidebar] = useState(false);
    //state for modal
    const [showModal, setShowModal] = useState(false);
    //ref for modal overlay to close modal on overlay click
    const modalOverlayRef = useRef(null);
    //same for main to close sidebar on outside click
    const mainRef = useRef(null)
    // SIDEBAR
    const openSidebar = () => {
        setShowSidebar(true);
    }

    const closeSidebar = () => {
        setShowSidebar(false);
    }
    const closeSidebarOutClick = (e) => {
        if (e.target === mainRef.current) {
            setShowSidebar(false)
        }
    }

    //MODAL
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    const closeOnOverlayClick = (e) => {
        if (e.target === modalOverlayRef.current) {
            setShowModal(false);
        }
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
                    closeModal,
                    modalOverlayRef,
                    closeOnOverlayClick,
                    mainRef,
                    closeSidebarOutClick
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