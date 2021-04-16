import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import Navigation from './navigation';
import { Header } from './header';
import { Footer } from './Footer';
import { FaCheck, FaUpload, FaTrash } from 'react-icons/fa';
import { EMartialStatus, EMilitaryStatus, EGender } from '../api/Interfaces';
interface IProps extends RouteComponentProps {
	onSubmit: any;
	submissionMessage?: string;
	setFileUploaded: any;
	errorValidation: any;
	onClose:any
}
export const Careers: FunctionComponent<IProps> = (props: IProps) => {
	const [fileUploaded, setFileUploaded] = useState<any>(undefined);
	useEffect(()=>{
		resetFormData()
	},[''])
	const onUpload = (event: any) => {
		var file = event.target.files[0];
		event.target.value = null;
		setFileUploaded(file);
		props.setFileUploaded(file);
	}
	const onRemove = () => {
		setFileUploaded(undefined);
	}
	const renderSubmittionMessage = () => {
		return (
			<div className="row text-center" >
				<FaCheck color="green" style={{ width: '5em', height: '5em' }} />
				<h3 >
					{props.submissionMessage}

				</h3>
			</div>
		)
	}
	const modalBody = () => {
		return (
			<div className="contact-info">
				<h5 style={{ color: "black" }}> Please fill your data. All field are required!</h5>
				{props.errorValidation && <small style={{ color: 'red' }}>Please enter all fields.</small>}
				<form onSubmit={props.onSubmit} name="sentMessage" id="contactForm" noValidate>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="text"
									id="name"
									className="form-control"
									placeholder="Name"
									required
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="email"
									id="email"
									className="form-control"
									placeholder="Email"
									required
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="tel"
									id="phone"
									className="form-control"
									placeholder="Mobile no."
									required
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="date"
									id="date"
									className="form-control"
									placeholder="Date of Birth"
									required
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>

					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="form-group">
								<select
									id="gender"
									className="form-control"
									placeholder="Gender"
									required
								>
									<option value="">Gender</option>
									<option value={EGender.female}>Female</option>
									<option value={EGender.male}>Male</option>
								</select >
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<select
									id="martialStatus"
									className="form-control"
									placeholder="Martial Status"
									required
								>
									<option value="">Martial Status</option>
									<option value={EMartialStatus.single}>Single</option>
									<option value={EMartialStatus.married}>Married</option>
									<option value={EMartialStatus.divorced}>Divorced</option>
									<option value={EMartialStatus.widowed}>Widowed</option>
									<option value={EMartialStatus.seperated}>Separated</option>
								</select>
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<select
									id="militaryStatus"
									className="form-control"
									placeholder="Military Status"
									required
								>
									<option value="">Military Status</option>
									<option value={EMilitaryStatus.completed}>Completed</option>
									<option value={EMilitaryStatus.postponed}>Postponed</option>
									<option value={EMilitaryStatus.notApplicable}>Not Applicable</option>
									<option value={EMilitaryStatus.exempted}>Exempted</option>
								</select>
								<p className="help-block text-danger"></p>
							</div>
						</div>

					</div>
					<div className="row">
						<div className="col-md-6">
							{/* <div className="form-group"> */}
							<input type="file" id="file" onChange={(e) => { onUpload(e) }} accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
							<label htmlFor="file" className="btn-2"><FaUpload />  Upload</label>
							{/* <input type="file" id="docpicker"
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" /> */}
							<p className="help-block text-danger"></p>
							{/* </div> */}

						</div>
						{fileUploaded && <div className="col-md-6" style={{ padding: "1rem 50px", color: "black", maxWidth: '100%' }}>
							{fileUploaded.name} <FaTrash onClick={onRemove} />
						</div>}
					</div>
					<button type="submit" className="btn btn-custom-form btn-lg" style={{ marginLeft: '35%', marginRight: '65%', padding: "1rem 50px" }}>
						Submit
                    </button>
					<div id="success"></div>

				</form>
			</div>
		)
	}
	const resetFormData=()=>{
		Array.from(document.querySelectorAll("input")).forEach(
			input => (input.value = "")
		  );
		Array.from(document.querySelectorAll("select")).forEach(
			input => (input.value = "")
		);
		setFileUploaded(undefined);
	}
	const onClose=()=>{
		resetFormData()
		props.onClose();
	}
	return (
		<div className="modal fade" id="careers" role="dialog">
			<div className="modal-dialog">

				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" onClick={onClose}>&times;</button>
						<h4 className="modal-title">Join Us!</h4>
					</div>
					<div className="modal-body" style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
						{(!props.submissionMessage) ? modalBody() : renderSubmittionMessage()}
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger" data-dismiss="modal" onClick={onClose}>Close</button>
					</div>
				</div>

			</div>
		</div>
	)
}