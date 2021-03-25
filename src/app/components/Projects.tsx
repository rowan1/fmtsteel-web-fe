import React, { useState, useEffect } from "react";
import { IProjectBody } from "../api/Interfaces";
interface IProps{
  data:any
}
export const Projects =(props:IProps)=> {
  
    const handleReaderLoaded=(event:any)=>{
      let binaryString = event.target.result;
      return btoa(binaryString)
    }

    const getPreviewUrl=(file:any)=>{
      // console.log(file)
      // const byteCharacters = file;
      // const byteNumbers = new Array(file.length);
      // for (let i = 0; i < file.length; i++) {
      //     byteNumbers[i] = file.charCodeAt(i);
      // }
      // const byteArray = new Uint8Array(byteNumbers);

      // let image = new Blob([...file], { type: 'image/jpeg' });
      // console.log(image);
      // let imageUrl = URL.createObjectURL(image);
      // console.log(imageUrl);
      // return imageUrl;

      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr = arrayBufferToBase64(file);
      return base64Flag+imageStr;
    }
    const arrayBufferToBase64=(buffer:any)=> {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
    };
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
                      <img src={project.image} alt="..." className="projects-img" />
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