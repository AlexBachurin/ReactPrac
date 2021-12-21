import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
const Submenu = () => {
    const { submenuPage, isSubmenuOpen, location } = useGlobalContext();
    //useRef to style container with proper location
    const submenuContainerRef = useRef(null);
    //set columns in submenu depending on how many links we have
    const [cols, setCols] = useState('col-2')
    const { page, links } = submenuPage;
    //use useEffect to calculate location to show submenu bottom of hovered page and do it every time page/location changes
    useEffect(() => {
        //set default columns to avoid bugs
        setCols('col-2');
        submenuContainerRef.current.style.left = `${location.center}px`;
        submenuContainerRef.current.style.bottom = `${location.top}px`;
        //Set columns based on links length
        if (links.length > 3) {
            setCols('col-4')
        } else if (links.length > 2) {
            setCols('col-3')
        }
    }, [location, submenuPage])

    return (
        <aside ref={submenuContainerRef} className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
            <h4>{page}</h4>
            <div className={`submenu-center ${cols}`}>
                {links.map((link, index) => {
                    const { label, url, icon } = link;
                    return (
                        <a key={index} href={url}>{icon}{label}</a>
                    )
                })}
            </div>
        </aside>
    )
}

export default Submenu
