import React, { useState } from "react";
import text from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState(0);

  const [loremText, setLoremText] = useState([]);
  //input change
  const handleChange = (e) => {
    e.preventDefault();
    //get from input how many paragraphs to show
    const num = e.target.value;
    setParagraphs(num);
  }
  //Generator logic
  const handleSubmit = (e) => {
    e.preventDefault();
    //temp var for amount
    let amount = paragraphs;
    if (amount < 0) {
      amount = 0;
    } else if (amount > text.length) {
      amount = text.length;
    }
    //slice needed amount from our text from data
    const tempArr = text.slice(0, amount);
    //set it to our state
    setLoremText(tempArr);
    //also clear input
    setParagraphs(0);
  }


  return (
    <section className="section-center">
      <h3>Random Lorem Ipsum generator</h3>
      <form action="submit" className="lorem-form">
        <label htmlFor="amount">paragraph count: </label>
        <input onChange={handleChange} type="number" name="amount" id="amount" value={paragraphs} />
        <button onClick={handleSubmit} type="submit" className="btn">generate</button>
      </form>
      {loremText.map((item, index) => {
        return (
          <article key={index} className="lorem-text">{item}</article>
        )
      })}
    </section>
  );
}

export default App;
