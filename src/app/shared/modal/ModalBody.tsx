import React from 'react';
interface IProps{
    bodyElements?:JSX.Element
}
export const ModalBody=(props:IProps)=>{
    return(
        <div className="modal-body">
          {/* <p>Some text in the modal.</p> */}
          {props.bodyElements}
        </div>
    )
}