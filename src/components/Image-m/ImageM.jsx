import React from 'react'
import "./ImageM.css";

const ImageM = ({ img, title }) => {
    return (
        <div className='imageM-div'>
            <div className="overlay-m">
                <p>{title}</p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default ImageM