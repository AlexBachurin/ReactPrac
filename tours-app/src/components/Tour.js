import React, { useState } from 'react'

const Tour = ({ id, image, name, info, price, deleteTour }) => {
    //state for readMore option
    const [readMore, setReadMore] = useState(false)

    //function to show more text
    const showMore = () => {
        setReadMore(!readMore);
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p>{readMore ? info : `${info.slice(0, 200)}...`}
                    <button onClick={showMore}>{readMore ? 'show less' : 'show more'}</button>
                </p>
                <button onClick={() => {
                    deleteTour(id);
                }} className="delete-btn">not interested</button>
            </footer>
        </article>
    )
}

export default Tour
