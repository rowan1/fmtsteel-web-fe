import { createContext } from "react";
import { UserConfig } from "../routesConfig/UserConfig";
import { navigate } from "@reach/router";
import { Routes } from "../routesConfig/Routes";

export const isLoggedIn=(bool:Boolean)=>{
    return true;
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