import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa'
import Photo from "./components/Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  //state for current page
  const [page, setPage] = useState(1);
  //state to know if we need to fetch new Images
  const [newImages, setNewImages] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true)
    let url;
    //url for page
    const urlPage = `&page=${page}`;
    //main url to get list of photos
    url = `${mainUrl}${clientID}${urlPage}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      //we dont wanna just rewrite data, we need to expand items in our state
      setPhotos(oldPhotos => {
        return [...oldPhotos, ...data]
      })
      //setNewImages to false before loading !!!important
      setNewImages(false);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setNewImages(false);
      setLoading(false)
    }
  }

  // ***INFINITE SCROLL FUNCTIONALITY***

  //useEffect to fetch on page change
  useEffect(() => {
    fetchPhotos();
  }, [page])
  //useEffect to track newImages value change and change page if all good
  useEffect(() => {
    //if newImages in false state we dont change the page
    //also if we loading we dont change page
    if (loading) return;
    if (!newImages) return;
    //if all ok we change page
    setPage(oldPage => {
      return oldPage + 1;
    })
  }, [newImages])
  const scrollEvent = () => {
    //get height of user window, how much we scrolled on page and current height of page
    const inner = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    console.log(inner, scrollY, documentHeight);
    //if height of window+scrollY is more then current page height, then we wanna fetch new page
    if (inner + scrollY >= documentHeight - 2) {
      setNewImages(true);
    }
  }
  //useEffect for scroll event
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
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

        <div className="photos-center">
          {photos.map(item => {
            return (
              <Photo key={item.id} {...item} />
            )
          })}
        </div>
        {loading ? <h2 className="loading">Loading...</h2> : null}
      </section>
    </main>
  );
}

export default App;
