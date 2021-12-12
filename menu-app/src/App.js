import React, { useState } from "react";
import Categories from "./components/Categories";
import MenuItems from "./components/MenuItems";
import items from "./data";


function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState([])
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <MenuItems menu={menu} />
      </section>
    </main>
  );
}

export default App;
