import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Row, Col, Image } from 'react-bootstrap';
import {ILandingPageData} from '../../LandingPage';
import JsonData from '../../data/data.json';
import { ClientsModal } from '../components/ClientsModal';
interface IProps extends RouteComponentProps{
}
export const Clients:React.FunctionComponent<IProps> = () => {
	const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});
	const getlandingPageData =()=> {
		setLandingPageData({...JsonData})
		}
	useEffect(()=>{
		getlandingPageData();
	},[])
	
	return (
		<div id="dashboard-clients" >
						<div className="container">
			<h2>Clients</h2>
			<button className="btn btn-custom btn-lg" style={{margin:'10px'}}  data-toggle="modal" data-target="#myModal">
			Manage Clients
        	</button>
			<ClientsModal />
			<div className="container">
				<Row>
					<Col xs={6} md={4}>
						<Image src="../img/logos/1.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="../img/logos/2.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="../img/logos/3.jpg" thumbnail />
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						<Image src="../img/logos/4.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="../img/logos/5.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="../img/logos/6.jpg" thumbnail />
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						<Image src="../img/logos/7.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="../img/logos/8.jpg" thumbnail />
					</Col>
					<Col xs={6} md={4}>
						<Image src="../img/logos/9.jpg" thumbnail />
					</Col>
				</Row>
			</div>
		</div>
		</div>
	)
}