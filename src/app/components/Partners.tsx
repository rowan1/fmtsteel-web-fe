import React from 'react';
// import Fade from 'react-reveal/Slide';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
var Fade = require("react-reveal/Fade");

export const Partners =()=>{
        return (
            <div id="clients" className="text-center">
            <div className="container">
              <div className="section-title">
                <h2>Clients</h2>
                <p>
                Special thanks to every client who participated in our growth during the previous years, hopefully, to continue to this success and always achieve the best and reach the largest number of clients.
                </p>
              </div>
              <div className="row">
              <Fade>
              <OwlCarousel className='owl-theme' loop margin={10} nav autoplay={true} autoplayTimeout={3000}>
                    <div className='item'>
                    <img
                        src="img/logos/1.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/2.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/3.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/4.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/5.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/6.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/7.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/8.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                    <div className='item'>
                    <img
                        src="img/logos/9.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </div>
                </OwlCarousel>
              </Fade>
              </div>
            </div>
          </div>
        )
      }
    
    export default Partners