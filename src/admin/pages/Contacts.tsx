import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';
interface IProps {
	Contact: any
}
export const Contacts = (props: IProps) => {
	console.log(props.Contact);
	return (
		<>
			<h2>Contacts</h2>
			<div className="contact-item">
				<p>
					<span>
						<i className="fa fa-map-marker"></i> Address
                  </span>
					{props.Contact ? props.Contact.address : "loading"}
				</p>
			</div>
			<div className="contact-item">
				<p>
					<span>
						<i className="fa fa-phone"></i> Phone
                  </span>{" "}
					{props.Contact ? props.Contact.phone : "loading"}
				</p>
			</div>
			<div className="contact-item">
				<p>
					<span>
						<i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
					{props.Contact ? props.Contact.email : "loading"}
				</p>
			</div>
		</>
	)
}