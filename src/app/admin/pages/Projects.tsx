import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';
import { ILandingPageData } from '../../LandingPage';
import JsonData from '../../data/data.json';
import { ProjectModal } from '../components/ProjectModal';
import { IProjectBody } from '../../api/Interfaces';
import { fetchProjects, saveProjects, updateProjects, removeProjects } from '../../api/Api';
import { DeleteConfirmationModal } from '../components/DeleteConfirmationModal';

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

		saveProjects(formData).then((res:any)=>{
		  getData();
		}).catch((error)=>{
		  console.log(error);
		})
		// else
		// 	editedProject.id &&updateProjects( formData, editedProject.id).then(()=>{
		// 		getData();
		// 	}).catch((error)=>{
		// 		console.log(error);
		// 	})
	  }
	
	const deleteResponse = (res: Boolean) => {
		if (res === true) {
			removeService()
		}
	}
	const removeService = () => {
		deletedId && removeProjects(deletedId).then((res) => {
			console.log(res)
			getData();
		}).catch((e) => {
			console.log(e);
		})
	}
	return (
		<div id="dashboard-projects" >
			<div className="container">
				<h2>PROJECTS</h2>


				<button className="btn btn-custom btn-lg" style={{ margin: '10px' }} data-toggle="modal" data-target="#myModal">
					Add new Project
        		</button>
				<ProjectModal onSave={onSubmit} project={editedProject}/>
				<DeleteConfirmationModal deleteResponse={deleteResponse} label="Project"/>
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
										<a data-toggle="modal" data-target="#myModal" onClick={() => { setEditedProject(project) }}>
										<FaEdit color="royalblue" />
										</a>
									</td>
									<td>
										<a data-toggle="modal" data-target="#confirm-delete" onClick={() => setDeletedId(project.id)}>
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