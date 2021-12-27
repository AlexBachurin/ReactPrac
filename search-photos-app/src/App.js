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
  //state for searchTerm
  const [searchTerm, setSearchTerm] = useState('')

  // *** FETCH FUNCTION ***
  const fetchPhotos = async () => {
    setLoading(true)
    let url;
    //url for page
    const urlPage = `&page=${page}`;
    //url for searchTerm
    const query = `&query=${searchTerm}`
    //main url to get list of photos
    url = `${mainUrl}${clientID}${urlPage}`;
    //if we have something in search input we should use search fetch from another url
    if (searchTerm) {
      url = `${searchUrl}${clientID}${urlPage}${query}`
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      //we dont wanna just rewrite data, we need to expand items in our state
      //if we have something in search input when we gotta get another response
      //also if we are on page 1 we need to rewrite our items
      if (searchTerm && page === 1) {
        setPhotos(data.results);
      }
      else if (searchTerm) {
        console.log(data);
        //we will have our array in data.results
        setPhotos(oldPhotos => {
          return [...oldPhotos, ...data.results]
        })
      }
      else {
        setPhotos(oldPhotos => {
          return [...oldPhotos, ...data]
        })
      }
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

  // *** SEARCH FUNCTIONALITY ***

  const handleSubmit = (e) => {
    e.preventDefault();
    //dont do anything if user not typed anything in input
    if (!searchTerm) return
    //if we are on page 1, fetch new photos
    if (page === 1) {
      fetchPhotos();
    }
    //and reset page to first by default
    setPage(1);

  }
  return (
    <main>
      <section className="search">
        <form action="" className="search-form">
          <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="search" type="text" className="form-input" />
          <button onClick={handleSubmit} className="submit-btn" type="submit">
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
