import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <section className="section-center">
      <h3>Random Lorem Ipsum generator</h3>
      <form action="submit" className="lorem-form">
        <label htmlFor="amount">paragraph count: </label>
        <input type="number" name="amount" id="amount" value={number} />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text"></article>
    </section>
  );
}

export default App;
