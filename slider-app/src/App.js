import React, { useState } from "react";
import data from "./data";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

function App() {
  const [people, setpeople] = useState(data);
  const [index, setindex] = useState(0)
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
        <button className="prev"><AiFillCaretLeft></AiFillCaretLeft></button>
        <button className="next"><AiFillCaretRight></AiFillCaretRight></button>
      </div>
    </section>
  );
}

export default App;
