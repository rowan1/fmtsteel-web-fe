import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';
import { ILandingPageData } from '../../LandingPage';
import JsonData from '../../data/data.json';
import { Modal } from '../../shared/modal/Modal';
import { ModalFooter } from '../../shared/modal/ModalFooter';
import { ModalHeader } from '../../shared/modal/ModalHeader';
import { ModalBody } from '../../shared/modal/ModalBody';

interface IProps extends RouteComponentProps{
	Projects?: any
}
export const Projects: React.FunctionComponent<IProps> = (props: IProps) => {
	const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});
	const[open, setOpen]= useState<boolean>(false);
	const toggle=()=>{setOpen(!open)}
	const show=()=>{setOpen(!true)}
	const getlandingPageData =()=> {
		setLandingPageData({...JsonData})
		}
	useEffect(()=>{
		getlandingPageData();
	},[])
	
	return (
		<div id="dashboard-projects" >
		<div className="container">
		<h2>PROJECTS</h2> 
		
	
		<button className="btn btn-custom btn-lg" style={{margin:'10px'}} data-toggle="modal" data-target="#myModal">
			Add new Project
        </button>
		<Modal 
			header={<ModalHeader title="Modal Header"/>} 
			body={<ModalBody bodyElements={<p>Some text in the modal.</p>}/>} 
			footer={<ModalFooter footerElements={<> 
			<button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			</>} />}
		/>
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
					{landingPageData.Projects?.map((d:any, i:number)=>{
						return(
						<tr key={i}>
						<td>
							<a href="#">
							{d.name}
							</a>
						</td>
						<td>{d.job}</td>
						<td>
							<FaEdit color="royalblue" onClick={()=>{console.log("HELLO EDIT")}}/>
						</td>
						<td>
							<FaTrashAlt color="coral" onClick={()=>{console.log("HELLO TRASH")}} />
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