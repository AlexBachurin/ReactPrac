import React, { useState } from 'react'
import List from './components/List';
const App = () => {
  const [name, setName] = useState('');
  return (
    <section className='section-center'>
      <form className='grocery-form'>
        <h3>Grocery cart</h3>
        <div className="form-control">
          <input className='grocery' type="text" placeholder='enter value' value={name} />
          <button type='submit' className='submit-btn'>add</button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
      </div>
    </section>
  )
}

export default App

