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
import { fetchContacts, fetchServices, fetchProjects, fetchClients } from './api/Api';
import { IContactsBody, IClientsBody } from './api/Interfaces';
// import Fade from "react-reveal/Fade";
var Fade =require('react-reveal/Fade');

export interface ILandingPageData{
    Header?:any,
    About?:any,
    Projects?:any,
    Services?:any,
    Contact?:IContactsBody,
    Features?:any,
    Clients?:IClientsBody[]
}
interface IProps extends RouteComponentProps{

}
export const LandingPage =(props:IProps)=> {

  const [clients, setClients] = useState<IClientsBody[]>([]);
  const [projects, setProjects] = useState<any>([]);
  const [services, setServices] = useState<any>([]);
  const [contacts, setContacs] = useState<IContactsBody>({});

  const fetchData=()=>{

    fetchProjects().then((res)=>{
      setProjects(res.items);
    }).catch((error)=>{
      console.log(error);
    })
    fetchServices().then((res)=>{
			setServices(res.items)
		}).catch((error)=>{
			console.log(error);
    })
    fetchClients().then((res)=>{
      setClients(res.items);
    }).catch((error)=>{
      console.log(error);
    })
    fetchContacts().then((res)=>{
      setContacs(res.items);
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    fetchData();
    
  },[''])
    return (
      <div>
        <Navigation />
        <Fade>
        <Header />
        </Fade>
        <About />
        {/* <Fade>
        <Features data={landingPageData.Features} />
        </Fade> */}
        <Fade>
        <Projects data={projects} />
        </Fade>
        <Fade>
        <Services data={services} />
        </Fade>
        <Fade>
        <Partners data={clients}/>
        </Fade>
        {/* <Fade>
        <Testimonials data={this.state.landingPageData.Testimonials} />
        </Fade> */}
        <Contact data={contacts} />
      </div>
    )
  }