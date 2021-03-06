import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap';
import { ClientsModal } from '../components/ClientsModal';
import { IClientsBody } from '../../api/Interfaces';
import { fetchClients, saveClients, removeClient } from '../../api/Api';
import { FaTrash } from 'react-icons/fa';
import { BASE_URL } from '../../api/ApiServiceManager';
import { DeleteConfirmationModal } from '../components/DeleteConfirmationModal';

// https://bootstrapious.com/p/bootstrap-photo-gallery
interface IProps{
	clients?:IClientsBody[]
}
export const Clients:React.FunctionComponent<IProps> = (props:IProps) => {
	const [clients, setClients]=useState<IClientsBody[]>();
	const [loading, setLoading] = useState<boolean>(false);
	const [deletedId, setDeletedId] = useState<number>();
	
	const onSubmit=(file:any)=>{
		setLoading(true);
		let formData = new FormData();
		formData.append('image', file);
		saveClients(formData).then((res)=>{
			setLoading(false);
			getData();
		})
	}
	
	const removeProject = () => {
		deletedId && removeClient(deletedId).then((res) => {
			getData();
		}).catch((e) => {
			console.log(e);
		})
	}
	const deleteResponse = (res: Boolean) => {
		if (res === true) {
			removeProject()
		}
	}

	const getData=()=>{
		fetchClients().then((res)=>{
			setClients(res.items);
		}).catch((error)=>{
			console.log(error);
		})
	}
	useEffect(()=>{
		props.clients && setClients(props.clients);
		setDeletedId(undefined);
	},[])
	return (
		<div id="dashboard-clients" >
						<div className="container">
			<h2>Clients</h2>
			<button className="btn btn-custom btn-lg" style={{margin:'10px'}}  data-toggle="modal" data-target="#myModal">
			Manage Clients
        	</button>
			<DeleteConfirmationModal deleteResponse={deleteResponse} label="Client" />
			<ClientsModal onSubmit={onSubmit} loading={loading}/>
			<div className="container">
				<Row>
					{clients?.map((client)=>{
						return(<Col xs={6} md={4}>
							<a data-toggle="modal" data-target="#confirm-delete" data-backdrop="static" data-keyboard="false"
							 onClick={() => setDeletedId(client.id)}>
								<FaTrash />
							</a>
							<Image src={`${BASE_URL}${client.path}`} thumbnail />
						</Col>)
					})}
				</Row>
			</div>
		</div>
		</div>
	)
}