import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <aside className='sidebar'>
                <button className='close-btn'><FaTimes></FaTimes></button>
                <div className="sidebar-links">
                    <article>
                        <h4>Products</h4>
                        <div className="sidebar-sublinks">
                            <a href="#">producs</a>
                            <a href="#">terminal</a>
                            <a href="#">connect</a>
                        </div>
                    </article>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
