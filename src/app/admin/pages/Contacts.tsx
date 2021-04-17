import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import JsonData from '../../data/data.json';
import { ILandingPageData } from '../../LandingPage.js';
import { fetchContacts, saveContacts } from '../../api/Api';
import { IContactsBody } from '../../api/Interfaces.js';

interface IProps extends RouteComponentProps{
	Contact?: any
}
export const Contacts:React.FunctionComponent<IProps> = (props: IProps) => {
	const [contactData, setContactData] = useState<IContactsBody>({});
	
	useEffect(()=>{
		fetchContacts().then((result)=>{
			console.log(result);
			setContactData(result.items);
		})
	},[])

	const onSubmit=(e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
		  email: { value: string };
		  phone: { value: string};
		  address: { value: string};
		};
		let formData = new FormData();
		formData.append('email', target?.email?.value||'');
		formData.append('phone', target?.phone?.value||'');
		formData.append('address', target?.address?.value ||'');
		if(contactData?.id)
			formData.append('id',contactData.id.toString())
		
		saveContacts(formData).then((res)=>{
			setContactData(res.items);
			console.log(res);
		}).catch((error)=>{
			console.log(error)
		})
	}
	return (
		<div id="dashboard-contacts">
		<div className="container">
			<h2>Contacts</h2>
			<form onSubmit={onSubmit} name="updateContact" id="contactForm" noValidate>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="email"
								id="email"
								className="form-control"
								placeholder="Email"
								required
								defaultValue={contactData?.email}
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
								defaultValue={contactData?.phone}
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
						defaultValue={contactData?.address}
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