import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import "./Page1.css"
import { useGSAP } from '@gsap/react';
import Page2 from '../Page2/Page2';

const Page1 = () => {
    const yellow1Ref = useRef(null);
    const video = useRef(null);
    const loderH1 = useRef(null);
    const navAnimation = useRef(null);
    const { contextSafe: yellow1Animation } = useGSAP({ scope: ".yellow1" });
    const { contextSafe: videoAnimation } = useGSAP({ scope: ".loader video" });
    const { contextSafe: loaderH1 } = useGSAP({ scope: ".loader h1" });
    const { contextSafe: nav } = useGSAP({ scope: ".nav" });

    useEffect(() => {
        // Animation timeline
        const tl = gsap.timeline();

        tl.to(yellow1Ref.current, {
            top: "-100%",
            duration: 0.5,
            delay: 0.5,
            ease: "expo.out"

        })
        tl.to(video.current, {
            top: "-100%",
            duration: 1,
            delay: 0.2,
            ease: "expo.out"
        }, "both")


        tl.to(loderH1.current, {
            color: "yellow",
            delay: 0.7,
            duration: 0.5,
        }, "both")


        tl.to(navAnimation.current, {
            delay: 0,
            duration: 0.5,
            color: "yellow",
        },)

        return () => {
            // Clean up animations
            tl.kill();
        };

    }, [yellow1Ref, video, loderH1, navAnimation]);



    return (



        <div className="loader">
            <div ref={navAnimation} className="nav">
                <div className="name">
                    <h1>Works</h1>
                </div>
                <div className="menu">
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div ref={yellow1Ref} className="yellow1"></div>
            <video ref={video} autoPlay muted src="/4_version1_200911_024106.mp4"></video>
            <h1 ref={loderH1}>
                <em>We</em> <em> are a </em>CREATIVE<em> studio<br />
                </em>DEDICATED <em>to </em>CULTURAL<br />
                ADVANCEMENT <em>through</em> <br />
                STRATEGY <em>and </em>DESIGN.
            </h1>
        </div>

    )

}

export default Page1

