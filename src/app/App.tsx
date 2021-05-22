import React from 'react';
import { Router, RouteComponentProps } from "@reach/router";
import { LandingPage } from './LandingPage';
import { Routes } from './routesConfig/Routes';
import { Dashboard } from './admin/Dashboard';
import { SignIn } from './admin/SignIn';
import { PrivateRoute } from './context/PrivateRoute';
import './style/inputStyle.scss';
import './style/mainDashboard.scss';
import { UserContext, isLoggedIn, logOut } from './context/UserContext';
import { FaSignOutAlt } from 'react-icons/fa';
import 'semantic-ui-css/semantic.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './admin/styles/App.scss';

// import { Dashboard } from './admin/Dashboard';
// import { Routes } from './routesConfig/Routes.js';
// import { LandingPage } from './LandingPage';
interface IScrollToTopProps extends RouteComponentProps {
  children?: React.ReactNode;
}
export const ScrollToTop: React.FC<IScrollToTopProps> = (props) => {

  React.useEffect(() => {
    globalThis.window.scrollTo(0, 0);
    // toast.configure();
   
  }, [props.location?.pathname]);

  return <>{props.children} </>;
};
export const LogoutComponent =()=>{ 
  return(
    <UserContext.Consumer>
      {({ isLoggedIn, logOut }) => (
        <a
        className="sidebar-btn"
        rel="noopener noreferrer"
        onClick={(e) => {logOut(); e.preventDefault(); return false;}}
        style={{float:'right', margin:'20px'}}
        >
        <FaSignOutAlt />
        <span> Logout</span>
        </a>
      )}
    </UserContext.Consumer>
);}
export const App=()=>{

    return (
      <UserContext.Provider value={{ isLoggedIn: isLoggedIn, logOut: logOut }}>
      <Router primary={false}>
        <ScrollToTop path="/">
        <LandingPage path={Routes.home} />
        <SignIn path={Routes.login}/>
        <PrivateRoute path={Routes.admin} comp={Dashboard} />
        </ScrollToTop>
      </Router>
      </UserContext.Provider>
    )
  }