import React from "react";
import "./Page3.css";
import ImageL from "../../components/Image-l/ImageL";
import ImageM from "../../components/Image-m/ImageM";
import Footer from "../../components/Footer/Footer";

const Page3 = () => {
    return (
        <div className="page3" data-scroll >
            <div className="image-container">
                <ImageM img="/Images-page3/next-studio.jpg" title="converse nextstudio" />
                <ImageL img="/Images-page3/essentials.jpg" title="essentials of god identity" />
                <ImageM img="/Images-page3/Nike-Studio.jpg" title="nike studio 45" />
                <ImageM img="/Images-page3/Beyonce-Lion-King.jpg" title="beyonce: the gift album" />
                <ImageL img="/Images-page3/converse-bball.jpg" title="converse basketball identity" />
                <ImageM img="/Images-page3/Call-of-Duty-League-Championship.jpg" title="cdl championship kit 2024" />
                <ImageM img="/Images-page3/the-north-face.jpg" title="the north face climb festival visual identity" />
                <ImageL img="/Images-page3/public-cover.jpg" title="public.com campaign" />
                <ImageM img="/Images-page3/versace.jpg" title="versace trigreca identity" />



            </div>
            <Footer />
        </div>
    )
}

export default Page3