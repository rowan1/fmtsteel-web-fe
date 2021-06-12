import React, { useState } from "react";
import { IProjectBody } from "../api/Interfaces";
import { readImageFromBuffer } from "../helper";
import { ProjectDetails } from "./ProjectDetails";
import { BASE_URL } from "../api/ApiServiceManager";

interface IProps{
  data?:any
}
export const Projects =(props:IProps)=> {
  const [open, setOpen] = useState<boolean>(false)
  const [chosenProject, setChosenProject] = useState<IProjectBody>();
    return (
      <div id="projects" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>OUR PROJECTS</h2>
          </div>
          <div id="row" >
            {props.data
              ? props.data.map((project:IProjectBody, i:number) => (
                  <div  key={`${project.title}-${i}`} className="col-md-3 col-sm-6 projects">
                    <div className="thumbnail">
                      {" "}
                      {/* <img src={`data:image/jpeg;base64,${readImageFromBuffer(project.image)}`} alt="..." className="projects-img" /> */}
                      {(project.path && project.path?.length>0) &&<img src={`${BASE_URL}${project.path[0]}`} alt="..." className="projects-img" />}

                      <div className="caption">
                        <a  role="button" onClick={()=>{ setChosenProject(project); setOpen(true)}}> 
                        <h4>{project.title}</h4>
                        </a>
                        <p>{project.description}</p>
                      </div>
                      {(chosenProject?.path && chosenProject?.path?.length>0) &&chosenProject && 
                        <ProjectDetails src={chosenProject.path}
                          title={chosenProject.title || ''}
                          description={chosenProject.description || ''}
                          onClose={()=>setOpen(false)}
                          open={open}
                          />}
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
}