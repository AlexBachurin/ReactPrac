import React, { useState, useEffect } from "react";
import data from './data'
import Article from "./components/Article";

const getLocalStorage = () => {
  //default theme
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}
function App() {
  //state for current theme 
  const [theme, setTheme] = useState(getLocalStorage());

  useEffect(() => {
    //every time we change theme, add class to whole document page
    document.documentElement.className = theme;
    //and set current theme to local storage
    localStorage.setItem('theme', theme)
  }, [theme])

  //theme change
  const handleChange = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme');
    }
  }
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button onClick={handleChange} className="btn">toggle</button>
        </div>
      </nav>
      <section className="articles">
        {data.map(item => {
          return (
            <Article key={item.id} {...item} />
          )
        })}
      </section>
    </main>
  );
}

export default App;
