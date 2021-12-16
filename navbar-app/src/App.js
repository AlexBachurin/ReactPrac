import React from "react";
import { FaTwitter, FaGoogle, FaFacebook, FaBars } from 'react-icons/fa'
function App() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          logo
          <button className="nav-toggle"><FaBars /></button>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">profile</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <a href="twitter.com"><FaTwitter /></a>
          <a href="facebook.com"><FaFacebook /></a>
          <a href="google.com"><FaGoogle /></a>
        </ul>
      </div>
    </nav>
  );
}

export default App;
