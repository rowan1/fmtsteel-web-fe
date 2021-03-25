import React from 'react';
import { UserConfig } from '../../routesConfig/UserConfig';
export const Home=()=>{
    return(
        <div className="main">
          <div className="">
            <div className="jumbotron">
              <h1>Hello, {UserConfig.getUserInfo().name}!<a className="anchorjs-link" href="#hello,-world!"><span className="anchorjs-icon"></span></a></h1>
              <p>Welcome back to the work space.</p>
              
            </div>
            </div>
        </div>
    )
}