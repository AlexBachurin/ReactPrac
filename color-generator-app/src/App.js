import React, { useEffect, useState } from "react";
import Values from 'values.js'
import SingleColor from "./components/SingleColor";

function App() {
  //state for input color
  const [color, setColor] = useState('');
  //state for list of colors based on input from values.js
  const [colorsList, setColorsList] = useState([]);
  //state for error
  const [error, setError] = useState(false);

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
      setError(false)
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }
  //show default color on load
  useEffect(() => {
    const dataColor = new Values('#f15025');
    setColorsList(dataColor.all(10));
  }, [])
  //useeffect to remove error msg
  useEffect(() => {
    const errorId = setTimeout(() => {
      setError(false)
    }, 3000);
    return () => {
      clearTimeout(errorId)
    }
  }, [error])
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form>
          <input className={`${error ? 'input-err' : null}`} onChange={handleChange} type="text" placeholder="#f15025" value={color} />
          <button onClick={handleSubmit} type="submit" className="btn">Generate</button>
          {error ? <ErrorComp /> : null}
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

const ErrorComp = () => {
  return (
    <h3 className="error-msg">Please enter correct value</h3>
  )
}

export default App;
