import React from 'react';
import { CustomInput } from '../../shared/CustomInput';
import { Modal } from '../../shared/modal/Modal';
import { ModalBody } from '../../shared/modal/ModalBody';
import { ModalFooter } from '../../shared/modal/ModalFooter';
import { ModalHeader } from '../../shared/modal/ModalHeader';
export const ClientsModal=()=>{
    const modalBody=()=>{
        return(
            <div className="container">
                <CustomInput />
            </div>
        )
    }
    return(
        <Modal
			header={<ModalHeader title="Clients" />}
			body={<ModalBody bodyElements={modalBody()} />}
			footer={<ModalFooter footerElements={<><button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
			<button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button></>
			} />}
		/>
    )
}