import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
const Submenu = () => {
    const { sublinks, submenuPage, isSubmenuOpen, location } = useGlobalContext();
    //useRef to style container with proper location
    const submenuContainerRef = useRef(null);
    //use useEffect to calculate location to show submenu bottom of hovered page and do it every time page/location changes
    useEffect(() => {
        console.log(submenuContainerRef)
        submenuContainerRef.current.style.left = `${location.center}px`;
        submenuContainerRef.current.style.bottom = `${location.top}px`;
    }, [location, submenuPage])
    return (
        <aside ref={submenuContainerRef} className={`submenu ${isSubmenuOpen ? 'show' : null}`}>
            {/* <h4>{submenuPage.page}</h4>
            <div className="submenu-center">
                {submenuPage.links.map((link, index) => {
                    const { label, url, icon } = link;
                    return (
                        <a key={index} href={url}>{icon}{label}</a>
                    )
                })}
            </div> */}
        </aside>
    )
}

export default Submenu
