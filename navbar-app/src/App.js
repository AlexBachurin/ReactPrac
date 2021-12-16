import React, { useEffect, useRef, useState } from "react";
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
function App() {
  const [showNav, setShowNav] = useState(false);
  //refs for link container and links to determine height to show
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  //toggle navBar functionality
  const showNavBar = () => {
    setShowNav(!showNav)
  }
  //get height of links and dynamically setup height to container
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight)
    if (showNav) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  })
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" className="logo" alt="logo" />
          <button onClick={showNavBar} className="nav-toggle"><FaBars /></button>
        </div>
        <div ref={linksContainerRef} className={`links-container ${showNav ? 'show-container' : null}`}>
          <ul ref={linksRef} className="links">
            {links.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(item => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}

export default App;
