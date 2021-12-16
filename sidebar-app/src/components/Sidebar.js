import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { links, social } from '../data'
import { useGlobalContext } from '../context'
const Sidebar = () => {
    const { showSidebar, closeSidebar } = useGlobalContext();
    return (
        <aside className={`sidebar ${showSidebar ? 'show-sidebar' : null}`}>
            <div className="sidebar-header">
                <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="logo" className="logo" />
                <button onClick={() => closeSidebar()} className="close-btn"><AiOutlineClose /></button>
            </div>
            <ul className="links">
                {links.map(({ id, url, text, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}{text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                {social.map(({ id, url, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
