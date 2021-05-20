import React, { useState, useEffect } from 'react'
import { Button, Header, Image, Modal, Grid, Checkbox, Form } from 'semantic-ui-react';
import { IServicesBody } from '../../api/Interfaces';

interface IProps{
    open:boolean,
    onAction: any,
    service?:IServicesBody,
    onSubmit?:any
}
export const ServiceModal=(props:IProps)=> {
  const [currentService, setCurrentService] = useState<IServicesBody>();
  const closeOnEscape = true
  const closeOnDimmerClick = true
  const dimmer = undefined
  useEffect(()=>{
    props.service && setCurrentService(props.service);
  },[])
//   return (
//     <Modal
//       height={'500'}
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       closeOnEscape={closeOnEscape}
//       closeOnDimmerClick={closeOnDimmerClick}
//       size={"small"}
//       trigger={<Button className="btn btn-custom btn-lg" style={{ 
//         fontFamily: 'Raleway',
//         textTransform: 'uppercase',
//         color: '#fff',
//         backgroundColor: '#c95f44',
//         backgroundImage: 'linear-gradient(to right, #db3630 0%, #c95f44 100%)',
//         padding: '14px 34px',
//         letterSpacing: '1px',
//         margin: '10',
//         fontSize: '15px',
//         fontWeight: '500',
//         borderRadius: '25px',
//         transition: 'all 0.5s linear',
//         border: '0'
//      }}>Add new Service</Button>}
//     >
//       <Modal.Header>Select a Photo</Modal.Header>
//       <Modal.Content image>
//         <Modal.Description>
//           <Header>Default Profile Image</Header>
//           <p>
//             We've found the following gravatar image associated with your e-mail
//             address.
//           </p>
//           <p>Is it okay to use this photo?</p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='black' onClick={() => setOpen(false)}>
//           Nope
//         </Button>
//         <Button
//           content="Yep, that's me"
//           labelPosition='right'
//           icon='checkmark'
//           onClick={() => setOpen(false)}
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   )
return (
    <Grid columns={1}>
      <Grid.Column>
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={props.open}
          onClose={() => props.onAction(false)}
          onOpen={() => props.onAction(true)}
        //   trigger={<Button >Show Modal</Button>}
        >
          <Modal.Header>Service Details</Modal.Header>
          <Modal.Content>
          <Form>
            <Form.Field>
            <label>Service Name</label>
            <input placeholder='Service Name' defaultValue={props.service?.title} 
            onChange={(e)=>{setCurrentService({...currentService,title:e.target.value})}}/>
            </Form.Field>
            <Form.Field>
            <label>Description</label>
            <input placeholder='Description' defaultValue={props.service?.description}
            onChange={(e)=>{setCurrentService({...currentService,description:e.target.value})}}/>
            </Form.Field>
            
            <Button type='submit' onClick={()=>{props.onSubmit(currentService)}}>Submit</Button>
        </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => props.onAction(false)} negative>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}