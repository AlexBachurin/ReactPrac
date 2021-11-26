import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
    return (
        <>
            {questions.map(item => {
                return <SingleQuestion key={item.id} {...item} />
            })}
        </>
    )
}

export default Questions
