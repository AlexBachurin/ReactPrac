import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa'
import Photo from "./components/Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const url = `${mainUrl}${clientID}`
  const fetchPhotos = async () => {
    setLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPhotos(data)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    setLoading(false);
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
        {loading ? <h2 className="loading">Loading...</h2> :
          <div className="photos-center">
            {photos.map(item => {
              return (
                <Photo key={item.id} {...item} />
              )
            })}
          </div>
        }
      </section>
    </main>
  );
}

export default App;
