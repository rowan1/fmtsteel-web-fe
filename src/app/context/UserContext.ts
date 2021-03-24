import { createContext } from "react";
import { UserConfig } from "../routesConfig/UserConfig";
import { navigate } from "@reach/router";
import { Routes } from "../routesConfig/Routes";
import jwt_decode from "jwt-decode";
import { ILoginResponse } from "../api/Interfaces";

export const UserLogin=(data:ILoginResponse)=>{
    UserConfig.setUserInfo(data.userInfo);
    UserConfig.setToken(data.accessToken);
    console.log("User Data! ")
    console.log(isLoggedIn());
    navigate(Routes.admin);
}
export const isLoggedIn=()=>{
    const token = UserConfig.getToken()
    if (token != null) 
        return true;
    return false;    
}
export const logOut=()=>{
    UserConfig.setUserInfo(null);
    UserConfig.setToken(null);
    navigate(Routes.login);
}
export const UserContext = createContext({
    isLoggedIn: isLoggedIn,
    logOut: logOut,
});