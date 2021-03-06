import React from 'react';

interface IProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  body?: JSX.Element;
}
export const Modal = (props: IProps) => {

  return (
    <div className="container">
      {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            {/* <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div> */}
            {props.header}
            {/* <div className="modal-body">
          <p>Some text in the modal.</p>
        </div> */}
            {props.body}
            {/* <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div> */}
            {props.footer}
          </div>

        </div>
      </div>

    </div>
  );
}