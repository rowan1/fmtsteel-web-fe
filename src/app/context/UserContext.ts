import { createContext } from "react";

const isLoggedIn=()=>{
    return true;
}
const logOut=()=>{

}
export const UserContext = createContext({
    isLoggedIn: isLoggedIn,
    logOut: logOut,
});