import React, { useState } from 'react';
import { Team } from '../../components/Team';
import { Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface Iprops {
	Team: any
}
export const Projects = (props: Iprops) => {

	return (
		<>
		<h2>PROJECTS</h2>
			<Table  hover size="sm">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{props.Team?.map((d:any, i:number)=>{
						return(
						<tr key={i}>
						<td>
							<a href="#">
							{d.name}
							</a>
						</td>
						<td>{d.job}</td>
						<td>
							<FaEdit onClick={()=>{console.log("HELLO EDIT")}}/>
						</td>
						<td>
							<FaTrashAlt onClick={()=>{console.log("HELLO TRASH")}} />
						</td>
					</tr>
						)
					})}
				</tbody>
			</Table>
		</>
	)
}