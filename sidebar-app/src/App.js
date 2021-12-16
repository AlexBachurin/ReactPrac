import React from "react";
import { FaBars } from 'react-icons/fa'
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main>
        <button className="sidebar-toggle">
          <FaBars />
        </button>
        <button className="btn">show Modal</button>
      </main>
      <div className="modal-overlay">
        <div className="modal-container">
          modal content
        </div>
      </div>
      <Sidebar />
    </>
  );


}

export default App;
