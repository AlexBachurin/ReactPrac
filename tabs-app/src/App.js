import React, { useState, useEffect } from "react";
import { BsChevronDoubleRight } from 'react-icons/bs'
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

  //function to switch current tab
  const switchTab = (index) => {
    if (index !== value) {
      setvalue(index);
    }
  }

  if (loading) {
    return (
      <section className="loading">
        <h2>Loading...</h2>
      </section>
    )
  }

  //get 1 tab to display
  const { title, dates, duties, company } = tabs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Tabs App</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((item, index) => {
            // add active class based on current value 
            let clsName = 'job-btn';
            if (index === value) {
              clsName += ' active-btn';
            }
            return (
              <button key={item.id} onClick={() => {
                switchTab(index);
              }}
                className={clsName}>{item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <BsChevronDoubleRight />
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
