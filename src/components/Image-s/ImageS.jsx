import React from 'react'
import "./ImageS.css";

const ImageS = ({ img, title }) => {
    return (
        <div className='imageS-div'>
            <div className="overlay-s">
                <p>{title}</p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default ImageS