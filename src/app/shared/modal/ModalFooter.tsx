import React from 'react';
interface IProps{
    footerElements?:JSX.Element
}
export const ModalFooter=(props:IProps)=>{
    return(
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button> */}
          {props.footerElements}
        </div>
    )
}