import React, { useState, useEffect } from 'react'
import { Button, Image, Modal, Grid, Form } from 'semantic-ui-react';
import { IServicesBody } from '../../api/Interfaces';
import { CustomInput } from '../../shared/CustomInput';
import { BASE_URL } from '../../api/ApiServiceManager';

interface IProps {
  open: boolean,
  onAction: any,
  service?: IServicesBody,
  onSubmit?: any,
  subServiceId?: number,
  loading:boolean
}
export const ServiceModal = (props: IProps) => {
  const [currentService, setCurrentService] = useState<IServicesBody>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any[]>([]);

  const closeOnEscape = true
  const closeOnDimmerClick = true

  useEffect(() => {
    if (props.service) {
      setCurrentService(props.service);
      let urls: string[] = [];
      props.service.path?.map((path) => {
        urls.push(`${BASE_URL}${path}`);
      })
      setImagePreviewUrl(urls);
    } else {
      setImagePreviewUrl([]);
    }
  }, [props])
  const onSubmit = () => {
    if (currentService?.title){
        props.onSubmit(currentService, props.subServiceId)
    }
  }
  const onUpload = (event: any) => {
    let files = event.target.files;
    let images: any[] = [];
    let urls: any[] = [];
    for (let i = 0; i < files.length; i++) {
      images.push(files[i]);
      let url = URL.createObjectURL(files[i])
      urls.push(url);
    }
    event.target.value = null;
    setCurrentService({ ...currentService, image: images });
    setImagePreviewUrl(urls);
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
        >
          <Modal.Header>Service Details</Modal.Header>
          <Modal.Content image>

            {
              imagePreviewUrl.map((url) => {
                return (
                  <Image
                    style={{ padding: '2px' }}
                    src={url}
                    size="medium"
                    wrapped
                  />
                )
              })
            }
            <br />
            <Modal.Description>
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


              </Form>
              <br />
              <CustomInput onFileUploaded={onUpload} multiple={true} />
            </Modal.Description>


          </Modal.Content>
          <Modal.Actions>
            <Button type='submit' onClick={onSubmit} positive disabled={props.loading}>Submit</Button>
            <Button onClick={() => props.onAction(false)} negative>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}