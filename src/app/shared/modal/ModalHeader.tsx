import React from 'react';
interface IProps{
    title?:string
}
export const ModalHeader=(props:IProps)=>{
    return(
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">{props.title}</h4>
        </div>
    )
}