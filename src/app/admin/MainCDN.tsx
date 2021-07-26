import React from 'react';
import { navigate } from '@reach/router';
import { Routes } from '../routesConfig/Routes';
import logo from '../FMT-Steel-logo.jpg';
import { Button } from 'semantic-ui-react';
import { FaSignOutAlt } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

export const MainCDN = (props: { pathChanged: any }) => {

	return (
		<UserContext.Consumer>
    {({ isLoggedIn, logOut }) => (
		<div className="ui grid">
			<div className="four wide column">
				<div className="ui secondary horizontal menu">
					<a onClick={() => navigate(Routes.home)}>
						<img width={40} style={{ margin: '20px' }} src={logo} alt="FMTSTEEL" />
					</a>
					<a onClick={() => { props.pathChanged(Routes.admin) }} className="active item">
						Home
    			</a>
					<a onClick={() => { props.pathChanged(Routes.projects) }} className="item">
						Projects
    			</a>
					<a onClick={() => { props.pathChanged(Routes.services) }} className="item">
						Services
    			</a>

					<a onClick={() => { props.pathChanged(Routes.clients) }} className="item">
						Clients
    			</a>

					<a onClick={() => { props.pathChanged(Routes.contacts) }} className="item">
						Contact
    			</a>

					<a onClick={() => { props.pathChanged(Routes.careers) }} className="item">
						Careers
    			</a>
					
					<Button
						className="sidebar-btn"
						rel="noopener noreferrer"
						onClick={(e) => {logOut(); e.preventDefault(); return false;}}
						style={{float:'right', margin:'20px'}}
						negative
						>
						<FaSignOutAlt />
						Logout
					</Button>

				</div>
			</div>

		</div>
		)}
    </UserContext.Consumer>
	)
}