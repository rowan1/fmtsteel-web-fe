import React, { useState, useEffect } from 'react'
import { Button, Header, Image, Modal, Grid, Checkbox, Form } from 'semantic-ui-react';
import { IServicesBody } from '../../api/Interfaces';

interface IProps {
  open: boolean,
  onAction: any,
  service?: IServicesBody,
  onSubmit?: any
}
export const ServiceModal = (props: IProps) => {
  const [currentService, setCurrentService] = useState<IServicesBody>();
  const closeOnEscape = true
  const closeOnDimmerClick = true
  const dimmer = undefined
  useEffect(() => {
    props.service && setCurrentService(props.service);
  }, [props])
  const onSubmit=()=>{
    if (currentService?.title)
      props.onSubmit(currentService)
  }
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
                  onChange={(e) => { setCurrentService({ ...currentService, title: e.target.value }) }} />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input placeholder='Description' defaultValue={props.service?.description}
                  onChange={(e) => { setCurrentService({ ...currentService, description: e.target.value }) }} />
              </Form.Field>

              <Button type='submit' onClick={onSubmit}>Submit</Button>
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