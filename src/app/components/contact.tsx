import React, { Component, useState, FormEvent } from "react";
import { Footer } from "./Footer";
import '../../app/style/inputStyle.scss';
import { FaUpload, FaTrash } from "react-icons/fa";
import { EMartialStatus, EMilitaryStatus, EGender, ICareersBody } from "../api/Interfaces";
import { apply } from "../api/Api";

var Slide =require('react-reveal/Slide');
interface IProps{
  data:any
}

export const Contact =(props:IProps)=> {
  const [fileUploaded, setFileUploaded] = useState<any>(undefined);

  const onSubmit=(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string};
      date: { value: string };
      gender: { value: EGender };
      militaryStatus: { value: EMilitaryStatus };
      martialStatus: { value: EMartialStatus };
      file: { files: FormData };
    };
    
    let formData = new FormData();
    formData.append('email', target.email.value);
    formData.append('phone', target.phone.value);
    formData.append('name', target.name.value);
    formData.append('dateOfBirth', target.date.value);
    formData.append('gender', target.gender.value);
    formData.append('militaryStatus', target.militaryStatus.value)
    formData.append('martialStatus', target.martialStatus.value)
    formData.append('resumeFile', fileUploaded)
    formData.append('resumeFileName', fileUploaded.name)

    apply(formData).then(()=>{

    })
  }

  const onUpload=(event:any)=>{
    var fileList = event.target.files;
    console.log(fileList[0])
    setFileUploaded(fileList[0]);
  }
  const onRemove=()=>{
    setFileUploaded(undefined);
  }
  const modalBody=()=>{
    return(
      <div className="contact-info">
       <h5 style={{color:"black"}}> Please fill your data. All field are required!</h5>
      <form onSubmit={onSubmit} name="sentMessage" id="contactForm" noValidate>
            <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    required
                />
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    required
                />
                <p className="help-block text-danger"></p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Mobile no."
                    required
                />
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    placeholder="Date of Birth"
                    required
                />
                <p className="help-block text-danger"></p>
                </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                <select 
                    id="gender"
                    className="form-control"
                    placeholder="Gender"
                    required
                >
                  <option value="">Gender</option>
                  <option value={EGender.female}>Female</option>
                  <option value={EGender.male}>Male</option>
                  </select >
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                <select
                    id="martialStatus"
                    className="form-control"
                    placeholder="Martial Status"
                    required
                >
                  <option value="">Martial Status</option>
                  <option value={EMartialStatus.single}>Single</option>
                  <option value={EMartialStatus.married}>Married</option>
                  <option value={EMartialStatus.divorced}>Divorced</option>
                  <option value={EMartialStatus.widowed}>Widowed</option>
                  <option value={EMartialStatus.seperated}>Separated</option>
                  </select>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                <select
                    id="militaryStatus"
                    className="form-control"
                    placeholder="Military Status"
                    required
                >
                  <option value="">Military Status</option>
                  <option value={EMilitaryStatus.completed}>Completed</option>
                  <option value={EMilitaryStatus.postponed}>Postponed</option>
                  <option value={EMilitaryStatus.notApplicable}>Not Applicable</option>
                  <option value={EMilitaryStatus.exempted}>Exempted</option>
                  </select>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-md-6">
                {/* <div className="form-group"> */}
                <input type="file" id="file" onChange={(e)=>{onUpload(e)}}/>
                <label htmlFor="file" className="btn-2"><FaUpload/>  Upload</label>
                {/* <input type="file" id="docpicker"
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" /> */}
                <p className="help-block text-danger"></p>
                {/* </div> */}
                
            </div>
            {fileUploaded && <div className="col-md-6" style={{padding: "1rem 50px", color:"black", maxWidth:'100%'}}>
                {fileUploaded.name} <FaTrash onClick={onRemove} />
            </div>}
            </div>
            <button type="submit" className="btn btn-custom-form btn-lg" style={{marginLeft:'35%', marginRight:'65%', padding: "1rem 50px"}}>
                  Submit
                </button>
            <div id="success"></div>
            
        </form>
        </div>
    )
  }
    return (
      <div>
        <div id="contact">
          <div className="container">
          <Slide left>
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Join Us!</h2>
                  <p>
                  Please fill in the form below and we will contact you very soon.
                  </p>
                </div>
                <div className="container">
                <button type="button"  className="btn btn-custom btn-lg" data-toggle="modal" data-target="#careers">
                  Apply now
                </button>
                
                <div className="modal fade" id="careers" role="dialog">
                  <div className="modal-dialog">
                  
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Join Us!</h4>
                      </div>
                      <div className="modal-body" style={{marginTop:'20px', marginLeft:'20px', marginRight:'20px'}}>
                        {modalBody()}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              </div>
            </div>
            </Slide>
            <Slide right>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={props.data ? props.data.facebook : "/"}
                        data-toggle="tooltip" title="" data-original-title="Facebook" target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.linkedin : "/"}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </Slide>
          </div>
        </div>
        <Footer />
      </div>
    );
}