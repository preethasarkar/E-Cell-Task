import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Modal(props) {
    function toggleModaltoFalse() {
        props.setState(false);
        console.log("closed");
    }
    return (
        <div onClick={toggleModaltoFalse} className="modal-overlay">
            <div className="modal-content">
                <h4>{props.role}</h4>
                <p><span style={{fontWeight: 'bold'}}>Job ID</span>: {props.job_id}</p>
                <p><span style={{fontWeight: 'bold'}}>Posting Date: </span>{props.job_posting_date}</p>
                <p><span style={{fontWeight: 'bold'}}>Role description: </span>{props.role_description}</p>
                <p><span style={{fontWeight: 'bold'}}>Eligibility: </span>{props.eligibilty}</p>
                <p><span style={{fontWeight: 'bold'}}>Work-type: </span>{props.work_type}</p>
                <button className="apply-button">Apply Now<ArrowForwardIcon style={{ marginLeft: "10px", marginTop:"5px"}}/> </button>
                <button onClick={toggleModaltoFalse}> Close</button>
            </div>
        </div>
    )
}

export default Modal;