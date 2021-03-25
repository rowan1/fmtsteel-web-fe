import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';
import { ILandingPageData } from '../../LandingPage';
import JsonData from '../../data/data.json';
import { ProjectModal } from '../components/ProjectModal';
import { IProjectBody } from '../../api/Interfaces';
import { fetchProjects, saveProjects } from '../../api/Api';

interface IProps extends RouteComponentProps {
}
export const Projects: React.FunctionComponent<IProps> = (props: IProps) => {
	const [projects, setProjects] = useState<IProjectBody[]>([]);
	const [deletedId, setDeletedId] = useState<number>();
	const [editedProject, setEditedProject] = useState<IProjectBody>();
	
	useEffect(() => {
		getData();
	}, [""])
	
	const getData = () => {
		fetchProjects().then((res)=>{
			setProjects(res.items);
		})
		setDeletedId(undefined);
		setEditedProject(undefined);
	}

	const onSubmit=(project:IProjectBody) => {
		console.log(project);
		let formData = new FormData();
		formData.append('description', project.description||'');
		formData.append('title', project.title ||'');
		formData.append('image', project.image||'')

		console.log(formData);
		saveProjects(formData).then((res:any)=>{
		  console.log(res.message);
		  getData();
		}).catch((error)=>{
		  console.log(error);
		})
	  }
	
	return (
		<div id="dashboard-projects" >
			<div className="container">
				<h2>PROJECTS</h2>


				<button className="btn btn-custom btn-lg" style={{ margin: '10px' }} data-toggle="modal" data-target="#myModal">
					Add new Project
        		</button>
				<ProjectModal onSave={onSubmit}/>
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
						{projects?.map((project: IProjectBody, i: number) => {
							return (
								<tr key={i}>
									<td>
										<a href="#">
											{project.title}
										</a>
									</td>
									<td>{project.description}</td>
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