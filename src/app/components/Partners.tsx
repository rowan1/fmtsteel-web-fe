import React, { useEffect, useState } from 'react';
// import Fade from 'react-reveal/Slide';
import OwlCarousel from 'react-owl-carousel';

import { IClientsBody } from '../api/Interfaces';
import { readImageFromBuffer } from '../helper';
import { fetchClients } from '../api/Api';
import { BASE_URL } from '../api/ApiServiceManager';
var Fade = require("react-reveal/Fade");

interface IProps {
  data?: IClientsBody[]
}
export const Partners = (props: IProps) => {
  const [clients, setClients] = useState<IClientsBody[]>();
  useEffect(()=>{
    fetchClients().then((res)=>{
      setClients(res.items);
    }).catch((error)=>{
      console.log(error);
    })
    // setClients(props.data)
  },[props])
  
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
              {clients?.map((client, i) => {
                return (
                  <div className='item' key={i}>
                    <img
                      src={`${BASE_URL}${client.path}`}
                      className="img-responsive"
                      alt="Client"
                      key={client.id}
                    />
                  </div>
                )
              })}
            </OwlCarousel>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Partners