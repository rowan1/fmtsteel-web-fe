import React from 'react';
interface IProps{
    title?:string,
    onClose?:any
}
export const ModalHeader=(props:IProps)=>{
    return(
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" onClick={()=>props.onClose()}>&times;</button>
            <h4 className="modal-title">{props.title}</h4>
        </div>
    )
}