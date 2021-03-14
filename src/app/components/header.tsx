import React from "react";
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
var Fade = require("react-reveal/Fade");
var Slide = require("react-reveal/Slide");
interface IProps{
  data?:any
}
export const Header =(props:IProps)=> {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                <Slide left>
                  <h1>
                    Welcome To
                    <span></span>
                  </h1>
                  </Slide>
                  <Fade>
                  <h1>FMTSTEEL</h1>
                  </Fade>
                  <Slide right>
                  <p>
                    Quality, Experties and commitments You can rely on.
                  </p>
                  </Slide>
                  {/* <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}
