import React from 'react';
import { FaUpload } from 'react-icons/fa';
export const CustomInput=()=>{
    return(
        <div className="custom-file">
            <input type="file" className="custom-file-input" id="file" />
            <label className="custom-file-label" htmlFor="file">
                <FaUpload />Choose file
            </label>
        </div>
    )
}