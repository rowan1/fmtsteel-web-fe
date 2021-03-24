import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';
import { ServiceModal } from '../components/ServiceModal';
import { IServicesBody } from '../../api/Interfaces';
import { fetchServices, removeServices, saveServices, updateServices } from '../../api/Api';
import { DeleteConfirmationModal } from '../components/DeleteConfirmationModal';

interface Iprops extends RouteComponentProps {
	Services?: any
}
export const Services: React.FunctionComponent<Iprops> = (props: Iprops) => {

	const [services, setServices] = useState<IServicesBody[]>([]);
	const [deletedId, setDeletedId] = useState<number>();
	const [editedService, setEditedSerive] = useState<IServicesBody>();

	useEffect(() => {
		getData()
	}, [""])

	const getData = () => {
		fetchServices().then((res) => {
			setServices(res.items);
		}).catch((error) => {
			console.log(error);
		})
		setDeletedId(undefined);
		setEditedSerive(undefined);
	}
	const removeService = () => {
		deletedId && removeServices(deletedId).then((res) => {
			console.log(res)
			getData();
		}).catch((e) => {
			console.log(e);
		})
	}
	const deleteResponse = (res: Boolean) => {
		if (res === true) {
			removeService()
		}
	}
	const onServiceAdded = (addedService: IServicesBody) => {
		let formData = new FormData();
		formData.append('title', addedService.title || '');
		formData.append('description', addedService.description || '');
		if(!editedService) 
			saveServices(formData).then((res) => { getData() }).catch((error) => { console.log(error); })
		else{
			(editedService.id) && 
				updateServices(formData, editedService.id).then((res) => { getData() }).catch((error) => { console.log(error); })
		}
	}
	return (
		<div id="dashboard-services" >
			<div className="container">
				<h2>Services</h2>
				<button className="btn btn-custom btn-lg" style={{ margin: '10px' }} data-toggle="modal" data-target="#myModal">
					Add new Service
        </button>
				<ServiceModal onAdd={onServiceAdded} service={editedService}/>
				<DeleteConfirmationModal deleteResponse={deleteResponse} label="Service" />
				<Table hover size="sm">
					<thead>
						<tr>
							<th>Title</th>
							<th>Description</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{services?.map((service: IServicesBody, i: number) => {
							return (
								<tr key={i}>
									<td>
										{service.title}
									</td>
									<td>{service.description}</td>
									<td>
										<a data-toggle="modal" data-target="#myModal" onClick={() => { setEditedSerive(service) }}>
											<FaEdit color="royalblue" />
										</a>
									</td>
									<td>
										<a data-toggle="modal" data-target="#confirm-delete" onClick={() => setDeletedId(service.id)}>
											<FaTrashAlt color="coral" />
										</a>
									</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</div>
		</div>
	)
}