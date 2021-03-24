import React, { useEffect, useState } from 'react';
interface IProps{
    deleteResponse:any,
    label:string
}
export const DeleteConfirmationModal=(props:IProps)=>{
    const onClick=(bool:Boolean)=>{
        props.deleteResponse(bool);
    }
    return(
        <div className="modal fade" id="confirm-delete" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h3 style={{color:"#c95f44"}}>{`Delete ${props.label} Confirmation`}</h3>
					</div>
					<div className="modal-body">
					<h1 className="text-center">{`Are you sure want to Delete this ${props.label}`}</h1> 
					</div>
					<div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" 
                        onClick={()=>onClick(false)}>Cancel</button>
						<a className="btn btn-danger btn-ok" data-dismiss="modal" onClick={()=>onClick(true)}>Delete</a>
					</div>
				</div>
			</div>
		</div>
    )

}