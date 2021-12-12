import React, { useState, useEffect } from "react";
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setloading] = useState(true)
  const [tabs, settabs] = useState([]);
  //value to show tab
  const [value, setvalue] = useState(0);
  //fetch data
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      settabs(data);
      setloading(false)

    } catch (error) {
      console.log(error)
    }
  }
  //useEffect for fetch
  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return (
      <section className="loading">
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <div className="App">
      Tabs App
    </div>
  );
}

export default App;
