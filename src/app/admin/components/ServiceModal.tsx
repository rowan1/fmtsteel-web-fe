import React, { useState } from 'react';
import { Modal } from '../../shared/modal/Modal';
import { ModalHeader } from '../../shared/modal/ModalHeader';
import { ModalBody } from '../../shared/modal/ModalBody';
import { ModalFooter } from '../../shared/modal/ModalFooter';
import { CustomInput } from '../../shared/CustomInput';
import { IServicesBody } from '../../api/Interfaces';
import { saveServices } from '../../api/Api';

interface IProp{
	service?:IServicesBody
}
export const ServiceModal = (props:IProp) => {
	const[service, setService] = useState<IServicesBody>({});

	const onSubmit=()=>{
		let formData = new FormData();
		formData.append('title', service.title || '');
		formData.append('description', service.description|| '');
		saveServices(formData).then((res)=>{
			console.log(res);
		}).catch((error)=>{
			console.log(error);
		})
	}
	const modalBody = () => {
		return (
			<div className="container">
				<form onSubmit={onSubmit} name="updateContact" id="contactForm" noValidate>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="name"
									id="name"
									className="form-control"
									placeholder="Service Name"
									required
									defaultValue={props?.service?.title}
									onChange={(e:any)=>{setService({title:e.target.value})}}
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
									onChange={(e:any)=>{setService({description:e.target.value})}}
									defaultValue={props?.service?.description}
								></textarea>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<button onClick={(e:any)=>{e.preventDefault(); onSubmit()}} type="submit" className="btn btn-primary" >Save</button>
					<div id="success"></div>					
				</form>
			</div>
		)
	}
	return (
		<Modal
			header={<ModalHeader title="Service Details" />}
			body={<ModalBody bodyElements={modalBody()} />}
			footer={<ModalFooter footerElements={<>
			<button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button></>
			} />}
		/>
	)
}