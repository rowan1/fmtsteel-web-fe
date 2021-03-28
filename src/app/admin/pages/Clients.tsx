import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Row, Col, Image, Form } from 'react-bootstrap';
import {ILandingPageData} from '../../LandingPage';
import JsonData from '../../data/data.json';
import { ClientsModal } from '../components/ClientsModal';
import { IClientsBody } from '../../api/Interfaces';
import { fetchClients, saveClients, removeClient } from '../../api/Api';
import { readImageFromBuffer } from '../../helper';
import { FaTrash } from 'react-icons/fa';

// https://bootstrapious.com/p/bootstrap-photo-gallery
interface IProps extends RouteComponentProps{
}
export const Clients:React.FunctionComponent<IProps> = () => {
	const [clients, setClients]=useState<IClientsBody[]>();

	const onSubmit=(file:any)=>{
		let formData = new FormData();
		formData.append('image', file);
		saveClients(formData).then((res)=>{
			getData();
		})
	}
	const onRemove=(id?:number)=>{
		id && removeClient(id).then(()=>{
			getData();
		}).catch((error)=>{
			console.log(error);
		})
	}

	const getData=()=>{
		fetchClients().then((res)=>{
			setClients(res.items);
		}).catch((error)=>{
			console.log(error);
		})
	}
	useEffect(()=>{
		getData();
	},[])
	return (
		<div id="dashboard-clients" >
						<div className="container">
			<h2>Clients</h2>
			<button className="btn btn-custom btn-lg" style={{margin:'10px'}}  data-toggle="modal" data-target="#myModal">
			Manage Clients
        	</button>
			<ClientsModal onSubmit={onSubmit} />
			<div className="container">
				<Row>
					{clients?.map((client)=>{
						return(<Col xs={6} md={4}>
							<a onClick={()=>onRemove(client.id)}>
								<FaTrash />
							</a>
							<Image src={`data:image/jpeg;base64,${readImageFromBuffer(client?.image)}`} thumbnail />
						</Col>)
					})}
					{/* <Col xs={6} md={4}>
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
					</Col> */}
				</Row>
			</div>
		</div>
		</div>
	)
}