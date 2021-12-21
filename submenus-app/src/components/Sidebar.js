import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Sidebar = () => {

    const { isSideBarOpen, closeSidebar, sublinks } = useGlobalContext();
    return (
        <div className={`sidebar-wrapper ${isSideBarOpen ? 'show' : null}`}>
            <aside className='sidebar'>
                <button onClick={closeSidebar} className='close-btn'><FaTimes></FaTimes></button>
                <div className="sidebar-links">
                    {sublinks.map((link, index) => {
                        //destructure link to better accessibility
                        const { page, links } = link;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((item, index) => {
                                        const { label, icon, url } = item;
                                        return (
                                            <a key={index} href={url}>{icon}{label}</a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
