import React, { useEffect, useState } from 'react';
import Navigation from './components/navigation';
import {Header} from './components/header';
import {About} from './components/about';
import {Services} from './components/services';
import {Projects} from './components/Projects';
import {Contact} from './components/contact';
import {Partners} from './components/Partners'
import JsonData from './data/data.json';
import { RouteComponentProps } from '@reach/router';
import { Features } from './components/features';
import { fetchContacts, fetchServices, fetchProjects } from './api/Api';
import { IContactsBody } from './api/Interfaces';
// import Fade from "react-reveal/Fade";
var Fade =require('react-reveal/Fade');

export interface ILandingPageData{
    Header?:any,
    About?:any,
    Projects?:any,
    Services?:any,
    Contact?:IContactsBody,
    Features?:any
}
interface IProps extends RouteComponentProps{

}
export const LandingPage =(props:IProps)=> {
  const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});

  const fetchData=()=>{
    let data:ILandingPageData = {};
    fetchContacts().then((res)=>{
      data.Contact = {...res.items};
      setLandingPageData({...data, ...landingPageData});
    })
    
    fetchServices().then((res)=>{
			data.Services = res.items;
      setLandingPageData({...data, ...landingPageData});
		}).catch((error)=>{
			console.log(error);
    })

    fetchProjects().then((res)=>{
      data.Projects = res.items;
      setLandingPageData({...data, ...landingPageData});
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    fetchData();
    
  },[""])
    return (
      <div>
        <Navigation />
        <Fade>
        <Header data={landingPageData.Header} />
        </Fade>
        <About data={landingPageData.About} />
        {/* <Fade>
        <Features data={landingPageData.Features} />
        </Fade> */}
        <Fade>
        <Projects data={landingPageData.Projects} />
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