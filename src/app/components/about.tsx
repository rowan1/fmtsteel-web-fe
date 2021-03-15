import React from 'react'
// import * as Slide 'react-reveal/Slide';
var Slide =require('react-reveal/Slide');

interface IProps{
  data:any
}
export const About =(props:IProps)=> {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
          <Slide left>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                {/* <h3>Why Choose Us?</h3> */}
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                  <a
                    href="#team"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Read More
                  </a>{" "}
                    {/* <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            </Slide>
            <Slide right>
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            </Slide>
          </div>
        </div>
      </div>
    )
}
