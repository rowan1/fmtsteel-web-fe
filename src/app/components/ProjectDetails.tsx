import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import OwlCarousel from 'react-owl-carousel';
import { BASE_URL } from '../api/ApiServiceManager';

interface IProps{
    src?:string[],
    title:string,
    description:string,
    open:boolean,
    onClose:any
}
export const ProjectDetails=(props:IProps)=>{
    const [dimmer, setDimmer] = useState<string>('blurring');
    return(
        <div>
      <Modal
      closeIcon
        style={{maxHeight:'1000px', overflow: 'auto'}}
        dimmer={dimmer}
        open={props.open}
        onClose={() => props.onClose()}
      >
        <Modal.Header>{props.title} Details</Modal.Header>
        <Modal.Content>
        <h2>
        {props.title}
        </h2>
          <p style={{margin:'25px', fontSize:'17px'}}>
          {props.description}
          </p>

          <OwlCarousel className='owl-theme' loop={false} rewind={true} margin={10} nav autoplay={true} autoplayTimeout={3000}>
              {props.src?.map((path, i) => {
                return (
                  <div className='item' key={i} style={{margin:'5px'}}>
                    <img
                      style={{maxWidth:'300px'}}
                      src={`${BASE_URL}${path}`}
                      className="img-responsive"
                      alt="Project"
                      key={i}
                    />
                  </div>
                )
              })}
            </OwlCarousel>

            
        </Modal.Content>
        <Modal.Actions >
        <Button positive onClick={() => props.onClose()} style={{float:'right', margin:'25px'}}>
            Ok
          </Button>
          
        </Modal.Actions>
      </Modal>
    </div>
    )
}