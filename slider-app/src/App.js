import React, { useState } from "react";
import data from "./data";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  //slider next prev logic
  const prevSlide = () => {
    if (index <= 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const nextSlide = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1)
    }
  }
  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //position for each slide based on current index value
          // *** SLIDER CSS LOGIC ***
          let position = 'nextSlide';
          if (index === personIndex) {
            position = 'activeSlide';
          } else if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img className="person-img" src={image} alt={name} />
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          )
        })}
        <button onClick={prevSlide} className="prev"><AiFillCaretLeft></AiFillCaretLeft></button>
        <button onClick={nextSlide} className="next"><AiFillCaretRight></AiFillCaretRight></button>
      </div>
    </section>
  );
}

export default App;
