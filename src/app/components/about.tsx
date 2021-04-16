import React from 'react'
import { Modal } from '../shared/modal/Modal';
import { ModalBody } from '../shared/modal/ModalBody';
import { ModalFooter } from '../shared/modal/ModalFooter';
import { ModalHeader } from '../shared/modal/ModalHeader';
// import * as Slide 'react-reveal/Slide';
var Slide =require('react-reveal/Slide');

interface IProps{
  data:any
}
export const About =(props:IProps)=> {

  const renderModal=()=>{
    return(
      <Modal
			header={<ModalHeader title="About Us" />}
			body={<ModalBody bodyElements={
        <div style={{margin:'15px', maxHeight:'400px', overflowY:'scroll'}}>
      <h4>
        FMT Steel provide a wide range of complete solutions which include tanks, pipelines, platforms, skids, C.I.P units, and etc.
      </h4>
      <div style={{fontSize:'17px'}}> 
        We are always committed to providing the best for you, focusing on three characteristics: 
        
        <h5 style={{justifyContent:'center', color:'#c95f44'}}>
        "Quality, Experience and uniqueness"
        </h5>
        
        by providing a highly skilled and experienced engineering team consisting of projects engineers, supervisors, site engineers, and craftsmen who are able to provide our customers with the highest quality service in both mechanical and electrical projects while satisfying the budget and timeframe specified for the project.
        We always keen to provide the latest equipment that helps to manufacture products with the highest accuracy and high technology to reach our clients' needs and satisfaction also we keen to meet the requirements for all projects by following all phases from starting of material purchasing to deliver to the client, passing by designs, implementation, quality control, installation process, welding, and etc.  
        <h5 >If you have any questions or comments, please feel free to contact us.</h5>
      </div>
      </div>
      } 
      />}
			footer={<ModalFooter footerElements={<button type="button" className="btn btn-danger" data-dismiss="modal">Back</button>} />}
		/>
    )
  }
    return (
        <div id="about">
        <div className="container">
          <div className="row">
          <Slide left>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                
                <h2>About Us</h2>
                <p>
                Welcome to <strong style={{color:'#c95f44'}}>FMT STEEL</strong>, the leading company in the field of food and beverage electromechanical installation, systems, and processing technology. 
                <br/><strong>Established in 2008, with a group of partners led by Ahmed Hosney. </strong>
                <br/>We have come a long way since its beginnings, we faced many difficulties, which prompted us to achieve more success during the previous years with the kind confidence of our valued customers.
                <br/>We are now serving clients all over the <strong>middle east</strong> and we are happy for achieving this success since our inception and we hope to achieve more and more with the participation of our partners and customers.

                </p>

                {renderModal()}
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                  <button
                    className="btn btn-custom btn-lg page-scroll"
                    data-toggle="modal" data-target="#myModal"
                  >
                    Read More
                  </button>{" "}
                    {/* <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            </Slide>
            <Slide right>
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            </Slide>
          </div>
        </div>
      </div>
    )
}
