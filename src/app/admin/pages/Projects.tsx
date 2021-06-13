import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { ProjectModal } from '../components/ProjectModal';
import { IProjectBody } from '../../api/Interfaces';
import { fetchProjects, saveProjects, updateProjects, removeProjects } from '../../api/Api';
import { DeleteConfirmationModal } from '../components/DeleteConfirmationModal';
import { Button } from 'semantic-ui-react';

interface IProps {
	projects?: IProjectBody[]
}
export const Projects: React.FunctionComponent<IProps> = (props: IProps) => {
	const [open, setOpen] = React.useState(false)
	const toggle = () => setOpen(!open);

	const [projects, setProjects] = useState<IProjectBody[]>([]);
	const [deletedId, setDeletedId] = useState<number>();
	const [editedProject, setEditedProject] = useState<IProjectBody>();

	useEffect(() => {
		props.projects && setProjects(props.projects)
	}, [""])

	const getData = () => {
		fetchProjects().then((res) => {
			setProjects(res.items);
		}).catch((error) => {
			console.log(error);
		})
		setDeletedId(undefined);
		setEditedProject(undefined);
	}
	const removeProject = () => {
		deletedId && removeProjects(deletedId).then((res) => {
			console.log(res)
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

	const onEdit = (project: IProjectBody) => {
		toggle();
		setEditedProject(project);
	}
	const onAction = (e: boolean) => {
		setOpen(e);
		setEditedProject(undefined);
	}
	const onSubmit = (newProject: IProjectBody) => {

		let formData = new FormData();
		formData.append('title', newProject.title || '');
		formData.append('description', newProject.description || '');
		if(newProject.image && newProject?.image.length>0){
			for(let i = 0; i<newProject.image.length ;i++){
			formData.append('image', newProject.image[i] || '')
			}
		}
		if (editedProject && editedProject.id) {
			formData.append('path', newProject.path?.toString() || '');
			updateProjects(formData, editedProject.id).then((res) => { afterSubmition() }).catch((error) => { console.log(error); })
		} else saveProjects(formData).then((res) => { afterSubmition() }).catch((error) => { console.log(error); })
	}
	const afterSubmition = () => {
		setOpen(false);
		setEditedProject(undefined);
		getData();
	}
	return (


		<div id="dashboard-projects" >
			<div className="container">
				<h2>Projects</h2>
				<>
					<Button onClick={toggle} className="btn btn-custom btn-lg" style={{
						fontFamily: 'Raleway',
						textTransform: 'uppercase',
						color: '#fff',
						backgroundColor: '#c95f44',
						backgroundImage: 'linear-gradient(to right, #db3630 0%, #c95f44 100%)',
						padding: '14px 34px',
						letterSpacing: '1px',
						margin: '10',
						fontSize: '15px',
						fontWeight: '500',
						borderRadius: '25px',
						transition: 'all 0.5s linear',
						border: '0',
						width: '250px'
					}}>Add Project</Button>
					<ProjectModal open={open} onAction={(e: boolean) => onAction(e)} project={editedProject} onSubmit={onSubmit} />
				</>
				<DeleteConfirmationModal deleteResponse={deleteResponse} label="Project" />
				<Table hover size="large">
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
										{project.title}
									</td>
									<td>{project.description}</td>
									<td>
										<a data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" onClick={() => onEdit(project)}>
											<FaEdit color="royalblue" />
										</a>
									</td>
									<td>
										<a data-toggle="modal" data-target="#confirm-delete" data-backdrop="static" data-keyboard="false" onClick={() => setDeletedId(project.id)}>
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
	);
}