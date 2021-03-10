import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { Routes } from '../routesConfig/Routes';
interface IProps extends RouteComponentProps{}
export const SignIn=(props:IProps)=>{
    const login=(e:any)=>{
        console.log(e);
    }
    
    return(
        <>
        <div className="container text-center" >
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Adminstrator Login</h2>
                </div>
                <form noValidate>
                  <div className="row">
                    
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
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Password"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Login
                  </button>
                </form>
            </div>
            </div>
            </div>
        <footer style={{marginTop: "350px", height:'50px'}}>
          <div className="container text-center">
            <p>
              &copy; FMT STEEL
            </p>
          </div>
        </footer>
        </>
    )
}