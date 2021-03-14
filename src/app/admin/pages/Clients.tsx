import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const Clients = () => {
	return (
		<div id="dashboard-clients" style={{padding: '100px 0'}}>
						<div className="container">
			<h2>Clients</h2>
			<button className="btn btn-custom btn-lg" style={{margin:'10px'}}>
			Manage Clients
        	</button>
			<div className="container">
				<Row>
					<Col xs={6} md={4}>
						<Image src="img/logos/1.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="img/logos/2.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="img/logos/3.jpg" thumbnail />
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						<Image src="img/logos/4.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="img/logos/5.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="img/logos/6.jpg" thumbnail />
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						<Image src="img/logos/7.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="img/logos/8.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="img/logos/9.jpg" thumbnail />
					</Col>
				</Row>
			</div>
		</div>
		</div>
	)
}