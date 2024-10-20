import React, { useState } from "react";
import Modal from "./Modal";

function JobCard(props) {
    const [modal, setModal] = useState(false);

    function toggleModaltoTrue() {
        setModal(true);
        console.log(modal);
    }
    return (
        <div className="card my-3">
            <div className="card-content" onClick={toggleModaltoTrue}>
                <div className="company my-3">
                    <img className="logo" src={props.icon} alt="Logo" />
                    <h6>{props.company}</h6>
                </div>
                <h5>{props.role}</h5>
                <h6>{props.location}</h6>
                <p>{props.salary}</p>
            </div>
            {modal && <Modal {...props} setState={setModal} />}
        </div>
    );

}

export default JobCard;