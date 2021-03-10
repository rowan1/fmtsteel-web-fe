import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const Clients = () => {
	return (
		<>
			<h2>Clients</h2>
			<Container>
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
			</Container>
		</>
	)
}