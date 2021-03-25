import React, { useState, useEffect } from 'react';
import { Modal } from '../../shared/modal/Modal';
import { ModalHeader } from '../../shared/modal/ModalHeader';
import { ModalBody } from '../../shared/modal/ModalBody';
import { ModalFooter } from '../../shared/modal/ModalFooter';
import { CustomInput } from '../../shared/CustomInput';
import { Image } from 'react-bootstrap';
import { IProjectBody } from '../../api/Interfaces';

interface IProps {
	project?: IProjectBody,
	onSave?:any
}
export const ProjectModal = (props: IProps) => {
	const [imagePreviewUrl, setImagePreviewUrl] = useState<any>(undefined);
	const [project, setProject] = useState<IProjectBody>({});

	const handleReaderLoaded=(event:any)=>{
		let binaryString = event.target.result;
		setImagePreviewUrl(btoa(binaryString));
		setProject({...project, image:btoa(binaryString)});
	}
	const onUpload=(event:any)=>{

		let reader = new FileReader();
		var fileList = event.target.files;
		let file = fileList[0];
		setProject({...project, image:file});
		reader.onloadend = (event) => {
			handleReaderLoaded(event)
		}
		reader.readAsBinaryString(file)
	  }
	const onSubmit=()=>{
		console.log("ONSUBMIT")
		props.onSave(project)
	}

	const modalBody = () => {
		return (
			<div className="container">
				<form name="updateContact" id="contactForm" noValidate>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="name"
									id="name"
									className="form-control"
									placeholder="Project Name"
									required
									onChange={(e:any)=>{setProject({...project, title:e.target.value})}}
									defaultValue={props.project?.title}
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>

					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<textarea
									name="description"
									id="description"
									className="form-control"
									rows={2}
									placeholder="Description"
									required
									onChange={(e:any)=>{setProject({...project, description:e.target.value})}}
									defaultValue={props.project?.description}
								></textarea>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<div id="success"></div>
					<div className="row">
						<div className="col-md-6">
							<CustomInput onFileUploaded={onUpload}/> 
							{imagePreviewUrl&&<Image style={{maxWidth:'200px'}} src={`data:image/png;base64,${imagePreviewUrl}`} thumbnail />}
						</div>
							
					</div>
					<div className="col-md-6">
						<button onClick={(e:any)=>{e.preventDefault(); onSubmit()}} type="submit" className="btn btn-primary"  data-dismiss="modal">Save</button>
					</div>
				</form>
			</div>
		)
	}
	return (
		<Modal
			header={<ModalHeader title="Project Details" />}
			body={<ModalBody bodyElements={modalBody()} />}
			footer={<ModalFooter footerElements={
				<>
				<button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
				</>
			} />}
		/>
	)
}