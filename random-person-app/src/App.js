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
  useEffect(() => {
    fetchRandomUser();
  }, [])
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
