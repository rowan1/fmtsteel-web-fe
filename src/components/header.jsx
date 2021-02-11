import React, { Component } from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'
export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <Slide left>
                  <h1>
                    {/* {this.props.data ? this.props.data.title : "Loading"} */}
                    Welcome To
                    <span></span>
                  </h1>
                  </Slide>
                  <Fade>
                  <h1>FMTSTEEL</h1>
                  </Fade>
                  <Slide right>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
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
}

export default Header;
