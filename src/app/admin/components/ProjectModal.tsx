import React, { useState, useEffect } from 'react'
import { Button, Header, Image, Modal, Grid, Form } from 'semantic-ui-react';
import { IProjectBody } from '../../api/Interfaces';
import { readImageFromBuffer } from '../../helper';

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
          <Image style={{maxWidth:'200px', maxHeight: '200px'}} src={imagePreviewUrl} thumbnail floated='right'/>}
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

              {/* <div className="col-md-6"> */}
							{/* <CustomInput onFileUploaded={onUpload} />  */}
              <Form.Field>
                <label>Upload</label>
                <input type="file" onChange={onUpload}/>
              </Form.Field>
              <br/>
              <br/>
              <Button type='submit' onClick={onSubmit}>Submit</Button>
            </Form>
            </Modal.Description>
          </Modal.Content>
          
          <Modal.Actions>
            <Button onClick={() => onClose(false)} negative>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}