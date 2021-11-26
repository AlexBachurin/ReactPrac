import React, { useState } from "react";

import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button onClick={clearList}>clear All</button>
      </section>
    </main>
  );
}

export default App;
