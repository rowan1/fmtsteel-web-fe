import React, { useState, useEffect } from 'react'
import { Button, Image, Modal, Grid, Form, Loader } from 'semantic-ui-react';
import { IProjectBody } from '../../api/Interfaces';
import { CustomInput } from '../../shared/CustomInput';
import { BASE_URL } from '../../api/ApiServiceManager';

interface IProps {
  open: boolean,
  onAction: any,
  project?: IProjectBody,
  onSubmit?: any,
  loading:boolean
}
export const ProjectModal = (props: IProps) => {
  const [currentProject, setCurrentProject] = useState<IProjectBody>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any[]>([]);

  const closeOnEscape = true
  const closeOnDimmerClick = true
  useEffect(() => {
    setCurrentProject(props.project);
    let urls:string[]=[];
    props?.project?.path?.map((path)=>{
      urls.push(`${BASE_URL}${path}`);
    })
    setImagePreviewUrl(urls);
  },[props])

  const onUpload=(event:any)=>{
    let files = event.target.files;
    let images:any[] = [];
    let urls:any[] = [];
    for(let i=0;i<files.length;i++){
      images.push(files[i]);
      let url = URL.createObjectURL(files[i])
      urls.push(url);
    }
		event.target.value = null;
    setCurrentProject({...currentProject, image:images});
		setImagePreviewUrl(urls);
  }
  const onClose=(e:boolean)=>{
    props.onAction(e)
  }
  const onSubmit=()=>{
    if(currentProject?.title && (currentProject.image || currentProject.path))
      props.onSubmit(currentProject)
  }
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Modal
          heigth={'100%'}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={props.open}
          onClose={() => onClose(false)}
          // onOpen={() => onClose(true)}
        
        >
          <Modal.Header>Project Details</Modal.Header>
          <br/>
          <Modal.Content image>
          { 
          imagePreviewUrl.map((url, key)=>{
            return(
              <Image 
                key={key}
                style={{padding:'2px'}}
                src={url} 
                size="medium"
                wrapped
                />
            )
            })
          }
          <br/>
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
            <CustomInput onFileUploaded={onUpload} multiple={true}/>
            </Modal.Description>
          </Modal.Content>
          
          <Modal.Actions>
            <Button onClick={onSubmit} positive disabled={props.loading}>
              {props.loading? 
              <>
              Loading 
              <Loader active inline size='tiny'/>
              </>
              : "Save"}
            </Button>
            <Button  disabled={props.loading} onClick={() => onClose(false)} negative>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}