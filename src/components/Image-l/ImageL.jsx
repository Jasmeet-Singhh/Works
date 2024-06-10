import React from 'react'
import "./ImageL.css";

const ImageL = ({ img, title }) => {
    return (
        <div className='imageL-div'>
            <div className="overlay-l">
                <p>{title}</p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default ImageL