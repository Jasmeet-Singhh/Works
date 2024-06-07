import React from 'react'
import "./MovingElement.css"

const MovingElement = ({ name, img, handle }) => {

  const mouseOver = () => {
    if (name === "mineral") {
      return handle(img)
    }
    if (name === "erthos") {
      return handle(img)
    }
    if (name === "converse") {
      return handle(img)
    }
    if (name === "skky") {
      return handle(img)
    }
    if (name === "boldly") {
      return handle(img)
    }

  }

  const mouseOut = () => {
    return handle("/Images/black.jpg");
  }


  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="elem" >
      <h2 >{name} </h2>
      <div className="moving">
        <div className="background"></div>
        <div className="moving-in">
          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Art Direction</h5>
          <h5>Experiential Design</h5>
          <h5>Motion & Animation</h5>
          <h5>Production</h5>
          <h5>Human Interface</h5>
          <h5>Packaging Design</h5>
          <h5>Print Design</h5>
          <h5>Digital Design</h5>
          <h5> Type Design</h5>
          <h5>Development</h5>
          <h5>Post Production</h5>
          <h5>Photography</h5>
          <h5>Film</h5>

          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Art Direction</h5>
          <h5>Experiential Design</h5>
          <h5>Motion & Animation</h5>
          <h5>Production</h5>
          <h5>Human Interface</h5>
          <h5>Packaging Design</h5>
          <h5>Print Design</h5>
          <h5>Digital Design</h5>
          <h5> Type Design</h5>
          <h5>Development</h5>
          <h5>Post Production</h5>
          <h5>Photography</h5>
          <h5>Film</h5>

          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Art Direction</h5>
          <h5>Experiential Design</h5>
          <h5>Motion & Animation</h5>
          <h5>Production</h5>
          <h5>Human Interface</h5>
          <h5>Packaging Design</h5>
          <h5>Print Design</h5>
          <h5>Digital Design</h5>
          <h5> Type Design</h5>
          <h5>Development</h5>
          <h5>Post Production</h5>
          <h5>Photography</h5>
          <h5>Film</h5>
          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>

          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>
          <h5>Art Direction</h5>
          <h5>Experiential Design</h5>
          <h5>Motion & Animation</h5>
          <h5>Production</h5>
          <h5>Human Interface</h5>
          <h5>Packaging Design</h5>
          <h5>Print Design</h5>
          <h5>Digital Design</h5>
          <h5> Type Design</h5>
          <h5>Development</h5>
          <h5>Post Production</h5>
          <h5>Photography</h5>
          <h5>Film</h5>
          <h5>Creative Direction</h5>
          <h5>Strategy</h5>
          <h5>Branding & Identity</h5>


        </div>

      </div>
    </div>
  )
}

export default MovingElement