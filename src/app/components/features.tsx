import React, { Component } from "react";
interface IProps{
  data:any
}
export const Features =(props:IProps)=> {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>OUR TEAM</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d:any,i:number) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
}
