import React from 'react';
import { FaUpload } from 'react-icons/fa';
interface IProps{
    onFileUploaded:any,
    multiple:boolean,
}
export const CustomInput=(props:IProps)=>{
    return(
        <div className="custom-file">
            <input type="file" className="custom-file-input" id="file" onChange={props.onFileUploaded}
                multiple={props.multiple}/>
            <label className="custom-file-label" htmlFor="file">
                <FaUpload />Choose Image
            </label>
        </div>
    )
}