import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
function App() {
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img className="user-img" src="https://res.cloudinary.com/dljezd6qv/image/upload/v1632861499/No-Image-Placeholder.svg.png" alt="random-user" />
          <p className="user-title">My name is</p>
          <p className="user-value">name</p>
          <div className="values-list">
            <button className="icon" data-labe='name'><FaUser /></button>
            <button className="icon" data-labe='email'><FaEnvelopeOpen /></button>
            <button className="icon" data-labe='age'><FaCalendarTimes /></button>
            <button className="icon" data-labe='street'><FaMap /></button>
            <button className="icon" data-labe='phone'><FaPhone /></button>
            <button className="icon" data-labe='password'><FaLock /></button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
