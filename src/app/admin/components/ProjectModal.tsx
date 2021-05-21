import React, { useState, useEffect } from 'react'
import { Button, Header, Image, Modal, Grid, Form } from 'semantic-ui-react';
import { IProjectBody } from '../../api/Interfaces';
import { readImageFromBuffer } from '../../helper';
import { CustomInput } from '../../shared/CustomInput';

interface IProps {
  open: boolean,
  onAction: any,
  project?: IProjectBody,
  onSubmit?: any
}
export const ProjectModal = (props: IProps) => {
  const [currentProject, setCurrentProject] = useState<IProjectBody>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>(undefined);

  const closeOnEscape = true
  const closeOnDimmerClick = true
  const dimmer = undefined
  useEffect(() => {
    if(props.project) { 
      setCurrentProject(props.project);
      console.log(props.project?.image);
      setImagePreviewUrl(`data:image/jpeg;base64,${readImageFromBuffer(props.project?.image)}`)
    }
  }, [props])

  const onUpload=(event:any)=>{
		let file = event.target.files[0];
		event.target.value = null;
		setCurrentProject({...currentProject, image:file});
		let url = URL.createObjectURL(file)
		setImagePreviewUrl(url);
    }
    const onClose=(e:boolean)=>{
      props.onAction(e)
      setImagePreviewUrl(undefined);
      setCurrentProject(undefined);
    }
    const onSubmit=()=>{
      if(currentProject?.title && currentProject.image)
        props.onSubmit(currentProject)
    }
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Modal
        height={'100%'}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={props.open}
          onClose={() => onClose(false)}
          // onOpen={() => onClose(true)}
        
        >
          <Modal.Header>Project Details</Modal.Header>
          <Modal.Content image>
          { imagePreviewUrl &&
          <Image 
          src={imagePreviewUrl} 
          size="medium"
          wrapped
          />}
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Project Name</label>
                <input placeholder='Project Name' defaultValue={props.project?.title}
                  onChange={(e) => { setCurrentProject({ ...currentProject, title: e.target.value }) }} />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input placeholder='Description' defaultValue={props.project?.description}
                  onChange={(e) => { setCurrentProject({ ...currentProject, description: e.target.value }) }} />
              </Form.Field>
              <br/>
              <br/>
              
            </Form>
            <CustomInput onFileUploaded={onUpload} />
            </Modal.Description>
          </Modal.Content>
          
          <Modal.Actions>
            <Button onClick={onSubmit} positive>Submit</Button>
            <Button onClick={() => onClose(false)} negative>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}