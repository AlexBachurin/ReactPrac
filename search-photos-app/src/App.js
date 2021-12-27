import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const url = `${mainUrl}${clientID}`
  const fetchPhotos = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    fetchPhotos();
  }, [])

  return (
    <main>
      <section className="search">
        <form action="" className="search-form">
          <input placeholder="search" type="text" className="form-input" />
          <button className="submit-btn" type="submit">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">

      </section>
    </main>
  );
}

export default App;
