import React from "react";
import JobCard from "./jobCard";
import job_list from "./jobs";


function createJobCard(job, index) {
    return <JobCard key={index} icon={job.icon} company={job.company} role={job.role} location={job.location} salary={job.salary} job_id={job.job_id} job_posting_date={job.job_posting_date} role_description={job.role_description} work_type={job.work_type} eligibilty={job.eligibilty}/>;
}

function JobList(props) {
    const filteredJobs = job_list.filter((job) =>
        job.company.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    return (
        <div className="card-list" id="target-job">
            {filteredJobs.map(createJobCard)}
        </div>
    );
}

export default JobList;