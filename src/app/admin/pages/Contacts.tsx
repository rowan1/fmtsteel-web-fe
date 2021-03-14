import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import JsonData from '../../data/data.json';
import { ILandingPageData } from '../../LandingPage.js';

interface IProps extends RouteComponentProps{
	Contact?: any
}
export const Contacts:React.FunctionComponent<IProps> = (props: IProps) => {
	const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});
	const getlandingPageData =()=> {
		setLandingPageData({...JsonData})
		}
	useEffect(()=>{
		getlandingPageData();
	},[])
	return (
		<div id="dashboard-contacts">
		<div className="container">
			<h2>Contacts</h2>
			<form name="updateContact" id="contactForm" noValidate>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="email"
								id="email"
								className="form-control"
								placeholder="Email"
								required
								defaultValue={landingPageData.Contact?.email}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								id="phone"
								className="form-control"
								placeholder="Phone"
								required
								defaultValue={landingPageData.Contact?.phone}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>

				</div>
				<div className="form-group">
					<textarea
						name="address"
						id="address"
						className="form-control"
						rows={2}
						placeholder="Address"
						required
						defaultValue={landingPageData.Contact?.address}
					></textarea>
					<p className="help-block text-danger"></p>
				</div>
				<div id="success"></div>
				<button type="submit" className="btn btn-custom btn-lg">
					Update Contact info
                  </button>
			</form>
		</div>
		</div>
	)
}