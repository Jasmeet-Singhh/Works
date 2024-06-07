import React, { useState } from 'react'
import "./Page2.css"
import MovingElement from '../../components/Moving-Element/MovingElement'

const Page2 = () => {
    const [img, setImg] = useState("/Images/black.jpg");

    const handle = (img) => {
        return setImg(img)
    }

    return (
        <div className='page2' data-scroll data-scroll-speed="0.1 " >
            <img src={img} alt="" />
            <MovingElement name="mineral" img={"/Images/MIN-1.jpg"} handle={handle} />
            <MovingElement name="erthos" img={"/Images/Home-Featured.jpg"} handle={handle} />
            <MovingElement name="converse" img={"/Images/converse-21.jpg"} handle={handle} />
            <MovingElement name="skky" img={"/Images/skky.jpg"} handle={handle} />
            <MovingElement name="boldly" img={"/Images/BOLDLY.jpg"} handle={handle} />
        </div>
    )
}

export default Page2