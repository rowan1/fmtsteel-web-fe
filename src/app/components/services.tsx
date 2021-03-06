import React, { useState } from "react";
import { IServicesBody } from "../api/Interfaces";
import { ServiceDetails } from "./ServiceDetails";
import { Row } from "react-bootstrap";
interface IProps {
  data?: IServicesBody[]
}
export const Services = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [chosenService, setChosenService] = useState<IServicesBody>();
  
  return (
    <>
      {chosenService && <ServiceDetails
        id={chosenService.id}
        src={chosenService.path}
        description={chosenService.description}
        title={chosenService.title}
        onClose={() => setOpen(false)}
        open={open}
        services={chosenService.services}
      />}
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <Row>
              <h3> We offer a range of services including:</h3> <br />

              We provide full range of fabricating and installation of process and utility pipework, platform, catwalk, stair, handrail, steelwork and equipment installation
              <br />
              We provide full wide of manufacturing of process equipment, CIP unit, Silo, Tanks, and other stainless-steel pipework to light gauge welding.
              
              A full range of 3D design and 2D drafting services,
              including: Machine drawings, fabrication drawings, AutoCAD drafting services.
              <br />
              <h5>
                Below you will find what we can offer in details:
              </h5>        
              </Row>

          </div>
          <div className="row">
            {props.data
              ? props.data.map((d: IServicesBody, i: number) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <div className="service-desc">
                    <a
                      role="button" onClick={() => {
                        setChosenService(d); setOpen(true);
                      }}>
                      <h3>{d.title}</h3>
                    </a>
                    <p>{d.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setChosenService(d);
                      setOpen(true);
                    }}
                    style={{ border: '2px solid #fff' }}
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
