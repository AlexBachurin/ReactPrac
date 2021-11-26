import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const SingleQuestion = ({ title, info }) => {
    //state to toggle if we clicked on button to open text
    const [isOpen, setIsOpen] = useState(false)

    //function to show text
    const openText = () => {
        setIsOpen(!isOpen);
    }
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button onClick={openText} className="btn">{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </header>
            {isOpen ? <p>{info}</p> : null}
        </article>
    )
}

export default SingleQuestion
