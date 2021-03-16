import React from 'react';
import { Modal } from '../../shared/modal/Modal';
import { ModalHeader } from '../../shared/modal/ModalHeader';
import { ModalBody } from '../../shared/modal/ModalBody';
import { ModalFooter } from '../../shared/modal/ModalFooter';
import { FaUpload } from 'react-icons/fa';
import { CustomInput } from '../../shared/CustomInput';
interface IProps {
	project?: any
}
export const ProjectModal = (props: IProps) => {
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
									defaultValue={props.project?.name}
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
									defaultValue={props.project?.address}
								></textarea>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<div id="success"></div>

					<CustomInput />
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
				<button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
				<button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
				</>
			} />}
		/>
	)
}