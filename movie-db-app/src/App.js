import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMoviePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<SingleMovie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
