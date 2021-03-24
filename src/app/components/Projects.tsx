import React from "react";
interface IProps{
  data:any
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
              ? props.data.map((d:any, i:number) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 projects">
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="projects-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
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