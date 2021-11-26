import React, { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./Loading";
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  //fetch tours
  const fetchTours = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }

  }

  //delete single Tour
  const deleteTour = (id) => {
    const newTours = tours.filter(item => item.id !== id);
    setTours(newTours);
  }

  //fetch tours in state on initial load
  useEffect(() => {
    fetchTours(url)
  }, [])

  if (isLoading) {
    return <Loading></Loading>
  }

  //if we have 0 tours to display then show message and offer a new fetch of tours
  if (tours.length === 0) {
    return (
      <div className="title">
        <h2 className='no-tours'>No Tours to display</h2>
        <button onClick={() => fetchTours(url)} className="btn">refresh</button>
      </div>
    )
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <Tours tours={tours} deleteTour={deleteTour} />
      </section>
    </main>
  );
}

export default App;
