import React, { useState } from "react";
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025');
  //handle user input of color
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value)
    setColor(value);
  }
  //handle generate button
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form>
          <input onChange={handleChange} type="text" placeholder="#f15025" value={color} />
          <button onClick={handleSubmit} type="submit" className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">

      </section>
    </>
  );
}

export default App;
