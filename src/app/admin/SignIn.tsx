import React, { useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import logo from '../FMT-Steel-logo.jpg';
import { Routes } from '../routesConfig/Routes';
import { signIn } from '../api/Api';

interface IProps extends RouteComponentProps{}
export const SignIn=(props:IProps)=>{

  const [loginData, setLoginData] = useState<{email?:string, password?:string}>({});

  
    const login=(e:any)=>{
      e.preventDefault();
      console.log(loginData);
      
      let formData = new FormData();
      formData.append('email', loginData.email || '');
      formData.append('password', loginData.password || '');

      signIn(formData).then((response)=>{
        console.log(response);
        navigate(Routes.admin);
      }).catch((error)=>{
        console.log(error);
      })
      
    }
    
    return(
        <main >
        <header style={{backgroundColor:'gainsboro'}}>
        <img width={40} style={{margin:'20px'}} src={logo} alt="FMTSTEEL" />
        </header>
        <div id="logIn">
        <div className="container">
            <div className="col-md-6">
              <div className="row">
                <div className="section-title">
                  <h2>ADMINISTRATOR LOGIN</h2>
                </div>
                <form noValidate onSubmit={login}>
                  <div className="row">
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e:any)=>{
                            setLoginData({...loginData, email:e.target.value})
                          }}
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
                          onChange={(e:any)=>{
                            setLoginData({...loginData, password:e.target.value})
                          }}
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg" style={{color: 'white'}}>
                    Login
                  </button>
                  
                </form>
            </div>
            </div>
            </div>
            </div>
        <footer style={{marginTop: "50px", height:'50px'}}>
          <div className="container text-center">
            <p>
              &copy; FMT STEEL
            </p>
          </div>
        </footer>
        </main>
    )
}