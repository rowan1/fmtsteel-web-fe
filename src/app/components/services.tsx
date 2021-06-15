import React, { useState } from "react";
import { IServicesBody } from "../api/Interfaces";
import { navigate } from "@reach/router";
import { Routes } from "../routesConfig/Routes";
import { ServiceDetails } from "./ServiceDetails";
interface IProps{
  data?:IServicesBody[]
}
export const Services =(props:IProps)=> {
  const [open, setOpen] = useState<boolean>(false)
  const [chosenService, setChosenService] = useState<IServicesBody>();
  const showDialog = () => {
    document.getElementById('service-details-modal')?.classList.add('show')
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = 'fixed';
    body.style.zIndex = '-1'
  };
  return (
    <>
    {chosenService && <ServiceDetails
      id={chosenService.id}
      src={chosenService.path}
      description={chosenService.description}
      title={chosenService.title}
      onClose={()=>setOpen(false)}
      open={open}
      services={chosenService.services}
      />}
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
            We offer a range of services including:
            </p>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d:IServicesBody, i:number) => (
                  <div  key={`${d.title}-${i}`} className="col-md-4">
                    {" "}
                    {/* <i className={d.icon}></i> */}
                    <div className="service-desc">
                      <a 
                      role="button" onClick={()=>{ 
                        // navigate(Routes.ServiceDetails+"?serviceId="+d.id); 
                        setChosenService(d); setOpen(true); }}>
                        <h3>{d.title}</h3>
                      </a>
                      <p>{d.description}</p>
                    </div>
                    <button
                    onClick={()=>{ 
                      // navigate(Routes.ServiceDetails+"?serviceId="+d.id);
                      setChosenService(d); 
                      setOpen(true);
                    }} 
                      style={{border:'2px solid #fff'}}
                      type="button"  
                      className="contacts btn btn-custom btn-lg">
                      See more
                    </button>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
      </>
    );
  }

export default Services;
