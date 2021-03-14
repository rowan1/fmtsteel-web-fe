import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';

interface Iprops extends RouteComponentProps{
	Services?: any
}
export const Services: React.FunctionComponent<Iprops> = (props: Iprops) => {
	return (
		<div id="dashboard-services" >
			<div className="container">
			<h2>Services</h2>
			<button className="btn btn-custom btn-lg" style={{margin:'10px'}}>
			Add new Service
        	</button>
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
					{props.Services?.map((d: any, i: number) => {
						return (
							<tr key={i}>
								<td>
									<a href="#">
										{d.name}
									</a>
								</td>
								<td>{d.text}</td>
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