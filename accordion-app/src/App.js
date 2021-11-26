import React, { useState } from "react";
import Questions from './components/Questions'
import data from "./data";

function App() {

  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section>
          <Questions />
        </section>
      </div>

    </main>
  );
}

export default App;
