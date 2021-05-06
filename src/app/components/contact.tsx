import React, { Component, useState, FormEvent } from "react";
import { Footer } from "./Footer";
import '../../app/style/inputStyle.scss';
import { FaUpload, FaTrash, FaCheck } from "react-icons/fa";
import _ from 'lodash';
import { EMartialStatus, EMilitaryStatus, EGender, ICareersBody, IContactsBody } from "../api/Interfaces";
import { apply } from "../api/Api";
import { Careers } from "./Careers";

var Slide =require('react-reveal/Slide');
interface IProps{
  data?:IContactsBody
}

interface ICareerData{
    name: {
        value: string;
    };
    email: {
        value: string;
    };
    phone: {
        value: string;
    };
    date: {
        value: string;
    };
    gender: {
        value: EGender;
    };
    militaryStatus: {
        value: EMilitaryStatus;
    };
    martialStatus: {
        value: EMartialStatus;
    };
    file: { 
      files: FormData 
    }
}
export const Contact =(props:IProps)=> {
  const [fileUploaded, setFileUploaded] = useState<any>(undefined);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [submissionMessage, setSubmissionMessage] = useState<string>();

  const checkForMissingData=(target:ICareerData)=>{
    if(_.isEmpty(target.email.value)
    || _.isEmpty(target.date.value)
    || (!fileUploaded)
    || _.isEmpty(target.gender.value)
    || _.isEmpty(target.martialStatus.value)
    || _.isEmpty(target.militaryStatus.value)
    || _.isEmpty(target.name.value)
    || _.isEmpty(target.phone.value)) return false;
    return true;
  }
  const onSubmit=(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ICareerData
    if(checkForMissingData(target)){
      let formData = new FormData();
      formData.append('email', target?.email?.value||'');
      formData.append('phone', target?.phone?.value||'');
      formData.append('name', target?.name?.value ||'');
      formData.append('dateOfBirth', target?.date?.value||'');
      formData.append('gender', target?.gender?.value||'');
      formData.append('militaryStatus', target?.militaryStatus?.value||'')
      formData.append('martialStatus', target?.martialStatus?.value||'')
      formData.append('resumeFile', fileUploaded||'')
      formData.append('resumeFileName', fileUploaded?.name||'')
      
      apply(formData).then((res:any)=>{
        console.log(res.message);
        setSubmissionMessage(res.message)
      }).catch((error)=>{
        console.log(error);
      })
      setErrorMessage(false);
    }
    else{
      setErrorMessage(true);
    }
  }  
  const onCareerClosed=()=>{
    setErrorMessage(false);
    setSubmissionMessage(undefined);
    setFileUploaded(undefined);
    setFileUploaded(undefined);
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
                
              </div>
              </div>
            </div>
            </Slide>
            <Slide right>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3 style={{color:'white'}}>Contact Info</h3>
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
                        href="https://www.facebook.com/FMT-STEEL-1440433392857188"
                        data-toggle="tooltip" title="" data-original-title="Facebook" target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/fmt-steel/"
                      data-toggle="tooltip" title="" data-original-title="LinkedIn" target="_blank"
                      >
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
        <Careers onSubmit={onSubmit} setFileUploaded={setFileUploaded} onClose={onCareerClosed}
                errorValidation={errorMessage} submissionMessage={submissionMessage}/>
      </div>
    );
}