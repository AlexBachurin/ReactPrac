import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { links, social } from '../data'
const Sidebar = () => {
    return (
        <aside className="sidebar show-sidebar">
            <div className="sidebar-header">
                <img src="" alt="logo" className="logo" />
                <button className="close-btn"><AiOutlineClose /></button>
            </div>
        </aside>
    )
}

export default Sidebar
