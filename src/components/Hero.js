import React, { useState } from "react";

function Hero(props) {
    const [jobName,setJobName]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        props.setSearchTerm(jobName);

        //console.log(props.searchTerm);
    }

    function handleChange(event){
        console.log(event.target.value);
        setJobName(event.target.value);
    }

    return (
        <div className="hero">
            <div className="px-3 text-center inside-hero mb-3 mt-2 text-white">
                <h1 className="display-5 fw-bold text-white">Your ultimate job search companion</h1>
                <div className="mx-auto d-flex justify-content-center">
                    <p className="lead mb-4 ">Are you looking for the perfect job or the ideal candidate? Find your dream job with thousands of job postings across industries.</p>
                </div>
            </div>
            

            <form onSubmit={handleSubmit}>
                <div className="search-div p-2">
                <i className="fas fa-search"></i>
                <input
                    type="text"
                    placeholder="Search jobs by keyword"
                    aria-label="Search"
                    value={jobName}
                    onChange={handleChange}
                    className="container"
                />
                <button type="submit" className="btn btn-primary search-btn">Search</button>
                </div>
            </form>

        </div>
    )
}

export default Hero;