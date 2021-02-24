import React, { useEffect, useState } from 'react';
import Navigation from './components/navigation';
import {Header} from './components/header';
import {About} from './components/about';
import {Services} from './components/services';
import {Team} from './components/Team';
import {Contact} from './components/contact';
import {Partners} from './components/Partners'
import JsonData from './data/data.json';
import { RouteComponentProps } from '@reach/router';
// import Fade from "react-reveal/Fade";
var Fade =require('react-reveal/Fade');

interface ILandingPageData{
    Header?:any,
    About?:any,
    Team?:any,
    Services?:any,
    Contact?:any
}
interface IProps extends RouteComponentProps{

}
export const LandingPage =(props:IProps)=> {
  const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});

  const getlandingPageData =()=> {
    setLandingPageData({...JsonData})
  }
  useEffect(()=>{
    getlandingPageData();
  },[])
    return (
      <div>
        <Navigation />
        <Fade>
        <Header data={landingPageData.Header} />
        </Fade>
        {/* <Fade>
        <Features data={this.state.landingPageData.Features} />
        </Fade> */}
        <About data={landingPageData.About} />
        <Fade>
        <Team data={landingPageData.Team} />
        </Fade>
        <Fade>
        <Services data={landingPageData.Services} />
        </Fade>
        <Fade>
        <Partners />
        </Fade>
        {/* <Fade>
        <Testimonials data={this.state.landingPageData.Testimonials} />
        </Fade> */}
        <Contact data={landingPageData.Contact} />
      </div>
    )
  }