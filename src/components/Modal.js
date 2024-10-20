import React from "react";

function Modal(props) {
    function toggleModaltoFalse() {
        props.setState(false);
        console.log("closed");
    }
    return (
        <div onClick={toggleModaltoFalse} className="modal-overlay">
            <div className="modal-content">
                <h4>{props.role}</h4>
                <p>Job ID: {props.job_id}</p>
                <p>Posting Date: {props.job_posting_date}</p>
                <p>Role description: {props.role_description}</p>
                <p>Eligibility: {props.eligibilty}</p>
                <p>Work-type: {props.work_type}</p>
                <button className="apply-button">Apply Now</button>
                <button onClick={toggleModaltoFalse}> Close</button>
            </div>
        </div>
    )
}

export default Modal;