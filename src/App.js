import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="main">
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row" id="target-hero">
          <div className="col">
            <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div>
        </div>
      </div>

      <JobList searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
}

export default App;