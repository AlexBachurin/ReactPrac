import React, { useState } from "react";

import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { FaQuoteRight } from 'react-icons/fa'
import reviews from "./data";

function App() {

  //index to switch between reviews
  const [index, setIndex] = useState(0);
  //store person based on index
  const person = reviews[index];


  //helper function to check for index boundaries
  const checkIndex = (num) => {
    //if we about to go out of array length return 0 and go to first slide
    //else go to last slide
    if (num > reviews.length - 1) {
      return 0;
    } else if (num < 0) {
      return num = reviews.length - 1;
    }
    return num;
  }

  //change review slides
  const prevReview = () => {
    setIndex((index) => {
      return checkIndex(index - 1);
    })
  }
  const nextReview = () => {
    setIndex((index) => {
      return checkIndex(index + 1);
    })
  }

  //random review
  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length); // 0-3
    //check to be sure that randomIndex isnt equals current index, if so add 1 or substract doesnt matter
    if (randomIndex === index) {
      randomIndex += 1;
    }
    //set index to random but check it before with our helper func
    setIndex(checkIndex(randomIndex));
  }
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
            <button onClick={prevReview} className="prev-btn"><GoChevronLeft /></button>
            <button onClick={nextReview} className="next-btn"><GoChevronRight /></button>
          </div>
          <button onClick={randomReview} className="random-btn">Random review</button>
        </article>
      </section>
    </main>
  );
}

export default App;
