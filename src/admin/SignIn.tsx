import React from 'react';
import { RouteComponentProps } from '@reach/router';
interface IProps extends RouteComponentProps{}
export const SignIn=(props:IProps)=>{
    const login=(e:any)=>{
        console.log(e);
    }
    
    return(
        <div>
            <p>You must log in to view the page at 
                {/* {from.pathname} */}
                </p>
            <button onClick={login}>Log in</button>
        </div>
    )
}