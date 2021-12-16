import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Home = () => {
    const { openSidebar } = useGlobalContext();
    return (
        <main>
            <button onClick={() => openSidebar()} className="sidebar-toggle">
                <FaBars />
            </button>
            <button className="btn">show Modal</button>
        </main>
    )
}

export default Home