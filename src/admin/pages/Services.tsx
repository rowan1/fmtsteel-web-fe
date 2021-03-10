import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface Iprops {
	Services: any
}
export const Services = (props: Iprops) => {
	return (
		<>
			<h2>Services</h2>
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
									<FaEdit onClick={() => { console.log("HELLO EDIT") }} />
								</td>
								<td>
									<FaTrashAlt onClick={() => { console.log("HELLO TRASH") }} />
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</>
	)
}