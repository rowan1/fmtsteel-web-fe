import React, { useState } from 'react';
export const ProjectModal=()=>{
    const[open, setOpen]= useState<boolean>(false);
    const handleOpen=()=> setOpen(true);
    const handleClose=()=> setOpen(false);
    return (
        <>
        <button type="button" onClick={handleOpen}>
        Open Modal
        </button>
        <div
        // open={open}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {<div>BODY</div>}
        </div>
        </>
    )
}