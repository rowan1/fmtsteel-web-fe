import { createContext } from "react";

const isLoggedIn=()=>{

}
const logOut=()=>{

}
export const UserContext = createContext({
    isLoggedIn: isLoggedIn,
    logOut: logOut,
});