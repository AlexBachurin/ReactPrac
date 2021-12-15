import React from 'react'

const SingleColor = ({ rgb, type, hex, weight }) => {
    //transform rgb to string to add background style to component
    const bgstyle = rgb.join(',');
    return (
        //add color-light class if type of color is shade, also add bg style to component
        <article className={`color  ${type === 'shade' ? 'color-light' : null}`} style={{ backgroundColor: `rgb(${bgstyle})` }}>
            <p className='percent-value'>{weight}</p>
            <p className="color-value">#{hex}</p>
        </article>
    )
}

export default SingleColor
