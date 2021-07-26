import React, { useEffect } from 'react';
import { Item, Modal, Button, Table } from 'semantic-ui-react';
import OwlCarousel from 'react-owl-carousel';
import { BASE_URL } from '../api/ApiServiceManager';
import { IServicesBody } from '../api/Interfaces';
import { useState } from 'react';

interface IProps{
    src?:string[],
    title?:string,
    description?:string,
    open:boolean,
    onClose:any,
    services?:IServicesBody[],
    id?:number;
}
export const SubServicesDetailsSection=(props:{services?:any[]})=>{
  return(
    <>
       {props.services && props.services.map((service)=>
          <Item>
            <Item.Content>
              <Table padded='very'>
						<tr>
            <div key={service.id}>
              <ServiceDetailsSection isSubService={true} description={service.description} src={service.path} title={service.title}/>
              </div>
              </tr>
              </Table>
              
          </Item.Content>
          </Item>
          
        )
        } 
        </>
  )
}
export const ServiceDetailsSection=(props:{src?:string[],
  title?:string,id?:number
  description?:string, isSubService:boolean})=>{
    return(
    <Item>
    {props.isSubService === false? 
          
          <h2>{props?.title}</h2>
          :<th><h3 >{props?.title}</h3></th>
          }
          <p style={{margin:'25px', fontSize:'17px'}}>
          {props?.description}
          </p>
          {props.src && <OwlCarousel center={true} className='owl-theme' loop={false} rewind={true} margin={10} nav autoplay={true} autoplayTimeout={3000}>
              {props.src.map((path, i) => {
                return (
                  <div className='item' key={i} style={{margin:'5px' }}>
                    <img
                    style={{maxWidth:'300px'}}
                      src={`${BASE_URL}${path}`}
                      className="img-responsive"
                      alt="Service"
                      key={i}
                    />
                  </div>
                )
              })}
            </OwlCarousel>}
            </Item>
  )
}
 export const ServiceDetails=(props:IProps)=>{
   const [services, setServices] = useState<any[]>([]);
   useEffect(()=>{
    //  setServices([]);
    props.services&&
      setServices(props.services);
   })
   const onClose=()=>{
    setServices([]);
    props.onClose();
    
   }
     return(
        <Modal
        closeIcon
        style={{maxHeight:'1000px', overflow: 'auto'}}
          dimmer={'blurring'}
          open={props.open}
          onClose={onClose}
        >
          <Modal.Header>{props.title} Details</Modal.Header>
          <Modal.Content>
            <>
            <div key={props.id}>
            <ServiceDetailsSection isSubService={false} src= {props.src} title={props.title} description={props.description}/>
            </div>
            <Item.Group divided>
            <SubServicesDetailsSection services={services}/>
            
            </Item.Group>
            </>
        
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={onClose} style={{float:'right', margin:'5px'}}>
          Ok
        </Button>
      </Modal.Actions>
      </Modal>
     )
 }