import React from "react";
import { IServicesBody } from "../api/Interfaces";
interface IProps{
  data?:IServicesBody[]
}
export const Services =(props:IProps)=> {

  return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d:IServicesBody, i:number) => (
                  <div  key={`${d.title}-${i}`} className="col-md-4">
                    {" "}
                    {/* <i className={d.icon}></i> */}
                    <div className="service-desc">
                      <h3>{d.title}</h3>
                      <p>{d.description}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }

export default Services;
