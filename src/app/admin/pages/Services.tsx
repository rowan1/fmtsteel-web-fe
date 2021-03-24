import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';
import { ILandingPageData } from '../../LandingPage';
import JsonData from '../../data/data.json';
import { ServiceModal } from '../components/ServiceModal';
import { IServicesBody } from '../../api/Interfaces';
import { fetchServices } from '../../api/Api';

interface Iprops extends RouteComponentProps{
	Services?: any
}
export const Services: React.FunctionComponent<Iprops> = (props: Iprops) => {

	const [services, setServices] = useState<IServicesBody[]>([]);
	
	useEffect(()=>{
		fetchServices().then((res)=>{
			setServices(res.items);
		}).catch((error)=>{
			console.log(error);
		})
	},[""])
	return (
		<div id="dashboard-services" >
			<div className="container">
			<h2>Services</h2>
			<button className="btn btn-custom btn-lg" style={{margin:'10px'}} data-toggle="modal" data-target="#myModal">
			Add new Service
        	</button>
			<ServiceModal />
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
					{services?.map((d: IServicesBody, i: number) => {
						return (
							<tr key={i}>
								<td>	
									{d.title}
								</td>
								<td>{d.description}</td>
								<td>
									<FaEdit color="royalblue" onClick={() => { console.log("HELLO EDIT") }} />
								</td>
								<td>
									<FaTrashAlt color="coral" onClick={() => { console.log("HELLO TRASH") }} />
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