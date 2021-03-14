import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';
import { ILandingPageData } from '../../LandingPage';
import JsonData from '../../data/data.json';

interface IProps extends RouteComponentProps{
	Projects?: any
}
export const Projects: React.FunctionComponent<IProps> = (props: IProps) => {
	const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});
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
	
	{/* <ProjectModal /> */}
		<button className="btn btn-custom btn-lg" style={{margin:'10px'}}>
			Add new Project
        </button>
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