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
import { MainCDN } from './MainCDN';

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
        const [pathchange, setPathChange] = useState<string>(Routes.admin);
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
            
            <header style={{textAlign:'center'}}>
              
              
              <MainCDN pathChanged={setPathChange} />
            </header>
            {pathchange === Routes.admin ? 
            <Home />
            :
            pathchange === Routes.projects? 
            <Projects projects={projects}/>
            :
            pathchange === Routes.services? 
            <Services services={services}/>
            :
            pathchange === Routes.clients? 
            <Clients clients={clients}/>
            :
            pathchange === Routes.contacts? 
            <Contacts contact={contactData}/>:
            pathchange === Routes.careers? 
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