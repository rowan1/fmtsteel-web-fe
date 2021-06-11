import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import OwlCarousel from 'react-owl-carousel';

interface IProps{
    src:string,
    title:string,
    description:string,
    open:boolean,
    onClose:any
}
export const ProjectDetails=(props:IProps)=>{
    const images = [9, 8, 7, 6, 5].map((number) => ({
        src: `https://placedog.net/${number}00/${number}00?id=${number}`
      }));
    // const [open, setOpen] = useState<boolean>(false);
    const [dimmer, setDimmer] = useState<string>('blurring');
    return(
        <div>
      {/* <Button
        onClick={() => setOpen(true)}
      >
        Open
      </Button> */}

      <Modal
      style={{maxHeight:'1000px'}}
        dimmer={dimmer}
        open={props.open}
        onClose={() => props.onClose()}
      >
        <Modal.Header>{props.title} Details</Modal.Header>
        <Modal.Content>
          {props.description}


          <OwlCarousel className='owl-theme' loop margin={10} nav autoplay={true} autoplayTimeout={3000}>
              {images?.map((client, i) => {
                return (
                  <div className='item' key={i}>
                    <img
                      src={client.src}
                      className="img-responsive"
                      alt="Client"
                      key={i}
                    />
                  </div>
                )
              })}
            </OwlCarousel>

            <Button positive onClick={() => props.onClose()} style={{float:'right'}}>
            Ok
          </Button>
        </Modal.Content>
        {/* <Modal.Actions>
          
          
        </Modal.Actions> */}
      </Modal>
    </div>
    )
}