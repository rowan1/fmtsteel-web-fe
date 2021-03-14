import React, { Component } from "react";
import { Footer } from "./Footer";
var Slide =require('react-reveal/Slide');
interface IProps{
  data:any
}
export const Contact =(props:IProps)=> {
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
                <form name="sentMessage" id="contactForm" noValidate>
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
            <div className="col-md-4">
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
            <div className="col-md-2">
                <div className="form-group">
                <select 
                    id="gender"
                    className="form-control"
                    placeholder="Gender"
                    required
                >
                  <option>Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  </select >
                <p className="help-block text-danger"></p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                <select
                    id="martialStatus"
                    className="form-control"
                    placeholder="Martial Status"
                    required
                >
                  <option>Martial Status</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Engagged</option>
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
                  <option>Military Status</option>
                  <option>N/A</option>
                  <option>N/A</option>
                  </select>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                <input type="file" id="docpicker"
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                <p className="help-block text-danger"></p>
                </div>
            </div>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn btn-custom btn-lg">
            Apply now
            </button>
        </form>
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