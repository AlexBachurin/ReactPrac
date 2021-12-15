import React, { useEffect, useState } from "react";
import Values from 'values.js'
import SingleColor from "./components/SingleColor";

function App() {
  //state for input color
  const [color, setColor] = useState('');
  //state for list of colors based on input from values.js
  const [colorsList, setColorsList] = useState([]);

  //handle user input of color
  const handleChange = (e) => {
    const value = e.target.value;
    setColor(value);
  }
  //handle generate button
  const handleSubmit = (e) => {
    e.preventDefault();
    //get color from values.js from our input, use try/catch since we want to handle wrong input
    try {
      const dataColor = new Values(color);
      //set all tints and shades of this color to our state list
      setColorsList(dataColor.all(10));
      console.log(colorsList)
    } catch (error) {
      console.log(error)
    }
  }
  //show default color on load
  useEffect(() => {
    const dataColor = new Values('#f15025');
    setColorsList(dataColor.all(10));
  }, [])
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
        {colorsList.map((color, index) => {
          return <SingleColor key={index} {...color} hex={color.hex} />
        })}
      </section>
    </>
  );
}

export default App;
