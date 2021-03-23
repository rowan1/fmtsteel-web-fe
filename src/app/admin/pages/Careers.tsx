import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Table } from 'react-bootstrap';
import ReactLinkify from "react-linkify";
import '../../data/WebsiteContent.docx';
interface IProps extends RouteComponentProps{
}


export const Careers:React.FunctionComponent<IProps> = (props: IProps)=>{
    const downloadFile=(file:any,fileName:string)=>{
        var arr = file.data;
        var byteArray = new Uint8Array(arr);
        var a = window.document.createElement('a');
      
        a.href = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
        a.download = fileName;
      
        document.body.appendChild(a)
        a.click();
      
        document.body.removeChild(a)
      }
    const downloadFileItem=()=>{
        return(
            <>
            <span className="highlight-front" style={{whiteSpace: "break-spaces"}}>
                <ReactLinkify>WebsiteContent </ReactLinkify></span>
            <i className="fa fa-download" onClick={()=>
             downloadFile("../../data/WebsiteContent.docx","WebsiteContent")}></i>
            </>
          )
    }
    return(
        <div id="dashboard-projects" >
        <div className="container">
            <h2>CAREERS</h2>
            <Table hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Rowan Ibrahim
                        </td>
                        <td>
                            rowan@gmail.com
                        </td>
                        <td>{downloadFileItem()}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    )
}
