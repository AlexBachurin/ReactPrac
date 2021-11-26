import React from 'react'
import Tour from './Tour'
const Tours = ({ tours }) => {
    return (
        <div>
            {tours.map(tour => {
                return (
                    <Tour key={tour.id} {...tour} />
                )
            })}
        </div>
    )
}

export default Tours
