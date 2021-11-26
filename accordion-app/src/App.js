import React from "react";
import Questions from './components/Questions'
import data from "./data";

function App() {

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          <Questions questions={data} />
        </section>
      </div>

    </main>
  );
}

export default App;
