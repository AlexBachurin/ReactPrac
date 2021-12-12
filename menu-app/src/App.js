import React, { useState } from "react";
import Categories from "./components/Categories";
import MenuItems from "./components/MenuItems";
import items from "./data";

//get only unique categories from our data
const filteredCategories = [...new Set(items.map(item => item.category))];


function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState(filteredCategories)



  //function to filter by category
  const filterByCategory = (category) => {
    //only use default items array which we get from our data so we wont mess up later if we choose different category
    const newMenu = items.filter(item => item.category === category);
    setMenu(newMenu);
  }
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterByCategory={filterByCategory} categories={categories} />
        <MenuItems menu={menu} />
      </section>
    </main>
  );
}

export default App;
