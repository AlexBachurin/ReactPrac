import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCocktailPage from "./pages/SingleCocktailPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path='/cocktail/:id' element={<SingleCocktailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
