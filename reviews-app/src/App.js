import React, { useState } from "react";

import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { FaQuoteRight } from 'react-icons/fa'
import reviews from "./data";

function App() {

  //index to switch between reviews
  const [index, setIndex] = useState(0);
  //store person based on index
  const person = reviews[index];
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1>Our reviews</h1>
          <div className="underline"></div>
        </div>
        <article className='review'>
          <div className="img-container">
            <img src={person.image} alt={person.name} className="person-img" />
            <span className="quote-icon"><FaQuoteRight /></span>
          </div>
          <h4 className="author">{person.name}</h4>
          <p className="job">{person.job}</p>
          <p className="info">{person.text}</p>
          <div className="button-container">
            <button className="prev-btn"><GoChevronLeft /></button>
            <button className="next-btn"><GoChevronRight /></button>
          </div>
          <button className="random-btn">Random review</button>
        </article>
      </section>
    </main>
  );
}

export default App;
