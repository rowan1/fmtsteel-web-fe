import React, { useState } from 'react';
import { CustomInput } from '../../shared/CustomInput';
import { Modal } from '../../shared/modal/Modal';
import { ModalBody } from '../../shared/modal/ModalBody';
import { ModalFooter } from '../../shared/modal/ModalFooter';
import { ModalHeader } from '../../shared/modal/ModalHeader';
import { Image } from 'react-bootstrap';
import { Loader } from 'semantic-ui-react';

interface IProps{
    onSubmit?:any,
    loading?:any
}
export const ClientsModal=(props:IProps)=>{
    
    const [image, setImage]=useState<any>();
    const [imagePreviewUrl, setImagePreviewUrl]=useState<any>();

    const onUpload=(event:any)=>{
        let file = event.target.files[0];
        event.target.value = null;
        setImage(file);
        let url = URL.createObjectURL(file);
        setImagePreviewUrl(url);
    }
    const resetData=()=>{
        setImage(undefined);
        setImagePreviewUrl(undefined);
    }
    const onSave=()=>{
        props.onSubmit(image);
        resetData()
    }
    const modalBody=()=>{
        return(
            <div className="container">
                <CustomInput onFileUploaded={onUpload} multiple={false}/>
                {imagePreviewUrl&& 
                <Image style={{maxWidth:'200px'}} src={imagePreviewUrl} thumbnail />
                }
            </div>
        )
    }
    return(
        <Modal
			header={<ModalHeader title="Clients" />}
			body={<ModalBody bodyElements={modalBody()} />}
			footer={<ModalFooter footerElements={<><button  disabled={props.loading} type="button" className="btn btn-primary" data-dismiss="modal" onClick={onSave}>
                {props.loading? 
                    <>
                    Loading 
                    <Loader active inline size='tiny'/>
                    </>
                    : "Save"}
                </button>
			<button disabled={props.loading} type="button" className="btn btn-danger" data-dismiss="modal" onClick={resetData}>Cancel</button></>
			} />}
		/>
    )
}