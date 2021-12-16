import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, type, hex, weight }) => {
    //state for copy to clipboard
    const [alert, setAlert] = useState(false);
    //transform rgb to string to add background style to component
    const bgstyle = rgb.join(',');
    //copy to clipboard functionality
    const copyToClipboard = () => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`);
    }
    //remove copy text after some time
    useEffect(() => {
        const timerId = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => {
            clearTimeout(timerId)
        }
    }, [alert])
    return (
        //add color-light class if type of color is shade, also add bg style to component
        <article
            className={`color  ${type === 'shade' ? 'color-light' : null}`}
            style={{ backgroundColor: `rgb(${bgstyle})` }}
            onClick={copyToClipboard}
        >
            <p className='percent-value'>{weight}%</p>
            <p className="color-value">#{hex}</p>
            {alert ? <p>Copied to clipboard</p> : null}
        </article>
    )
}

export default SingleColor
