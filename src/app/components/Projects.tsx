import React from "react";
import { IProjectBody } from "../api/Interfaces";
import { readImageFromBuffer } from "../helper";

interface IProps{
  data?:any
}
export const Projects =(props:IProps)=> {

    return (
      <div id="projects" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>OUR PROJECTS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row" >
            {props.data
              ? props.data.map((project:IProjectBody, i:number) => (
                  <div  key={`${project.title}-${i}`} className="col-md-3 col-sm-6 projects">
                    <div className="thumbnail">
                      {" "}
                      <img src={`data:image/jpeg;base64,${readImageFromBuffer(project.image)}`} alt="..." className="projects-img" />
                      <div className="caption">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
}