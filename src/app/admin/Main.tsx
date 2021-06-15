import React, { useState, useEffect } from 'react';

import logo from '../FMT-Steel-logo.jpg';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Contacts } from './pages/Contacts';  

import { FaBars } from 'react-icons/fa';
import { Routes } from '../routesConfig/Routes';
import { navigate } from '@reach/router';
import { Home } from './pages/Home';
import '../../app/style/inputStyle.scss'
import { LogoutComponent } from '../App';
import { Careers } from './pages/Careers';
import { fetchProjects, fetchServices, fetchContacts, fetchClients, fetchCareers } from '../api/Api';
import { IProjectBody, IServicesBody, IContactsBody, IClientsBody, ICareersBody } from '../api/Interfaces';

interface IProps{
    collapsed:any,
    handleToggleSidebar:any,
    handleCollapsedChange:any,
    toggled:any,
    path:string
}
export const Main=({
        collapsed,
        handleToggleSidebar,
        handleCollapsedChange,
        path
      }:IProps) => {
        const [projects, setProjects] = useState<IProjectBody[]>([]);
        const [services, setServices] = useState<IServicesBody[]>([]);
        const [contactData, setContactData] = useState<IContactsBody>({});
        const [clients, setClients]=useState<IClientsBody[]>();
        const [careers, setCareers] = useState<ICareersBody[]>([]);
          useEffect(()=>{
            console.log(path)
            getData();
          },[])
    
          const getData = () => {
            fetchProjects().then((res) => {
              setProjects(res.items);
            }).catch((error) => {
              console.log(error);
            })
            fetchServices().then((res) => {
              setServices(res.items);
            }).catch((error) => {
              console.log(error);
            })
            fetchContacts().then((result)=>{
              console.log(result);
              setContactData(result.items);
            })
            fetchClients().then((res)=>{
              setClients(res.items);
            }).catch((error)=>{
              console.log(error);
            })
            fetchCareers().then((result)=>{
              console.log(result);
              setCareers(result.items)
          })
          }
        return (
            <main id="#" style={{
              minHeight: '100vh'
            }}>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)} >
              <FaBars />
            </div>
            <header>
              <a onClick={()=>navigate(Routes.home)}>
                <img width={40} style={{margin:'20px'}} src={logo} alt="FMTSTEEL" />
              </a>
            {LogoutComponent()}
            </header>
            {path === Routes.admin ? 
            <Home />
            :
            path === Routes.projects? 
            <Projects projects={projects}/>
            :
            path === Routes.services? 
            <Services services={services}/>
            :
            path === Routes.clients? 
            <Clients clients={clients}/>
            :
            path === Routes.contacts? 
            <Contacts contact={contactData}/>:
            path === Routes.careers? 
            <Careers careers={careers}/>
            :null}
            <footer>
              <div className="container text-center">
            <p>
              &copy; FMT STEEL
            </p>
          </div>
            </footer>
          </main>
        );
      }