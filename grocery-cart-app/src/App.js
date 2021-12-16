import React, { useState } from 'react'
import List from './components/List';
const App = () => {
  //state for input
  const [name, setName] = useState('');
  //state for list
  const [list, setList] = useState([]);
  //state for alert
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  //state for editing item on list
  const [isEditing, setIsEditing] = useState(false)
  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //check if we have something in input if not show alert
    if (!name) {
      setAlert({ show: true, msg: 'please write something first', type: 'danger' })
    }
    //handle edit
    else if (isEditing) {

    }
    //if all ok add to list
    else {
      //create new item and add uniq id to it so we can edit it later
      const newItem = { id: new Date().getTime().toString(), value: name }
      setList([...list, newItem])
      setAlert({ show: true, msg: 'item sucessfully added', type: 'success' })
    }
  }
  //clear All items
  const clearAllItems = () => {
    setList([]);
  }
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert ? <p className={`alert alert-${alert.type}`}>{alert.msg}</p> : null}
        <h3>Grocery cart</h3>
        <div className="form-control">
          <input onChange={(e) => setName(e.target.value)} className='grocery' type="text" placeholder='enter value' value={name} />
          <button type='submit' className='submit-btn'>add</button>
        </div>
      </form>
      <div className="grocery-container">
        <List list={list} />
        <button onClick={clearAllItems} className="clear-btn">clear items</button>
      </div>
    </section>
  )
}

export default App

