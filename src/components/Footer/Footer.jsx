import React, { useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import LocomotiveScroll from 'locomotive-scroll';
import "./Footer.css"

const Footer = () => {

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#scroll-container'),
            smooth: true,

        });

        return () => {
            scroll.destroy();
        };
    }, []);

    const scrollToTop = () => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#scroll-container'),
            smooth: true,

        });
        scroll.scrollTo(0, 0);
    };
    return (
        <div id='scroll-container' className='footer' data-scroll >
            <div className="backToTop" onClick={scrollToTop}>
                <IoIosArrowUp className='arrow' />
                <h3>back to top </h3>
            </div>
            <div className="content">
                <div className="left-content">
                    <h2>hello@works.studio</h2>
                </div>
                <div className="right-content">
                    <h2>newsletter</h2>
                    <h2>instagram</h2>
                </div>
            </div>

        </div>
    )
}

export default Footer