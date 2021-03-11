import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';
interface IProps {
	Contact: any
}
export const Contacts = (props: IProps) => {
	return (
		<div id="dashboard-contacts" style={{padding: '100px 0'}}>
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
								defaultValue={props.Contact?.email}
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
								defaultValue={props.Contact?.phone}
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
						defaultValue={props.Contact?.address}
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