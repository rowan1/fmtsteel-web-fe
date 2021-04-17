import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Table } from 'react-bootstrap';
import ReactLinkify from "react-linkify";
import '../../data/WebsiteContent.docx';
import { fetchCareers } from '../../api/Api';
import { ICareersBody } from '../../api/Interfaces';
interface IProps extends RouteComponentProps{
}


export const Careers:React.FunctionComponent<IProps> = (props: IProps)=>{
    const [careers, setCareers] = useState<ICareersBody[]>([]);
    useEffect(()=>{
        fetchCareers().then((result)=>{
            console.log(result);
            setCareers(result.items)
        })
    },[])
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
    const downloadFileItem=(file:any, fileName:string)=>{
        return(
            <>
            <span className="highlight-front" style={{whiteSpace: "break-spaces"}}>
                <ReactLinkify>{fileName} </ReactLinkify></span>
            <i className="fa fa-download" onClick={()=>
             downloadFile(file,fileName)}></i>
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
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Military status</th>
                        <th>Martial status</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {careers.map((item:ICareersBody)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.militaryStatus}</td>
                                <td>{item.militaryStatus}</td>
                                <td>{downloadFileItem(item.resumeFile, item.resumeFileName||'')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    </div>
    )
}
