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

  const [user, setUser] = useState({});
  const [currentLabel, setCurrentLabel] = useState('');

  const fetchRandomUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    //get user info from data
    const userInfo = data.results[0];
    console.log(userInfo);
    //destructure properties from user we get and add it to state
    const { first, last } = userInfo.name;
    const email = userInfo.email;
    const { age } = userInfo.dob;
    const phone = userInfo.phone;
    const { password } = userInfo.login;
    const { large: image } = userInfo.picture;
    const { number, name } = userInfo.location.street;
    const person = { name: `${first} ${last}`, email, phone, age, password, image, street: `${number} ${name}` };
    setUser(person);
    console.log(person);
  }
  //handle mouse over on button
  const handleButtonHover = (e) => {
    const label = e.currentTarget.dataset.label;
    console.log(label);
    setCurrentLabel(label);
  }
  useEffect(() => {
    fetchRandomUser();
  }, [])
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img className="user-img" src={`${(user && user.image) || 'https://res.cloudinary.com/dljezd6qv/image/upload/v1632861499/No-Image-Placeholder.svg.png'}`} alt="random-user" />
          <p className="user-title">My {currentLabel} is</p>
          <p className="user-value">{user[currentLabel]}</p>
          <div className="values-list">
            <button onMouseOver={handleButtonHover} className="icon" data-label='name'><FaUser /></button>
            <button onMouseOver={handleButtonHover} className="icon" data-label='email'><FaEnvelopeOpen /></button>
            <button onMouseOver={handleButtonHover} className="icon" data-label='age'><FaCalendarTimes /></button>
            <button onMouseOver={handleButtonHover} className="icon" data-label='street'><FaMap /></button>
            <button onMouseOver={handleButtonHover} className="icon" data-label='phone'><FaPhone /></button>
            <button onMouseOver={handleButtonHover} className="icon" data-label='password'><FaLock /></button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
