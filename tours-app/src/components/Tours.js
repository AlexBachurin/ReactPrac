import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, deleteTour }) => {


    return (
        <div>
            {tours.map(tour => {
                return (
                    <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
                )
            })}
        </div>
    )
}

export default Tours
