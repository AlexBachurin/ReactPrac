import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Home = () => {
    const { openSidebar, openModal, mainRef, closeSidebarOutClick } = useGlobalContext();
    return (
        <main ref={mainRef} onClick={closeSidebarOutClick}>
            <button onClick={() => openSidebar()} className="sidebar-toggle">
                <FaBars />
            </button>
            <button onClick={() => openModal()} className="btn">show Modal</button>
        </main>
    )
}

export default Home
