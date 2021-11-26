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
  //fetch tours in state on initial load
  useEffect(() => {
    fetchTours(url)
    console.log(tours)
  }, [])

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <Tours tours={tours} />
      </section>
    </main>
  );
}

export default App;
