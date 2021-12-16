import React, { useRef, useState } from "react";
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
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          logo
          <button onClick={showNavBar} className="nav-toggle"><FaBars /></button>
        </div>
        <div className={`links-container ${showNav ? 'show-container' : null}`}>
          <ul className="links">
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
