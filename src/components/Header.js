import React from "react";

function Header() {

  function toggleDisplay(){
    const cont=document.getElementById("inside-toolbar");
    console.log(cont);
    if(cont.style.display==='none'){
      cont.style.display='flex';
      cont.style.flexDirection='column';
      
    }

    else{
      cont.style.display='none';
    }
  }

  return (
    <header class="header">
      <div class="header-left">
        <img src="/assets/logo.svg" alt="Logo" />
        JobBoard
      </div>

      <div class="header-middle">
        <a href="#target-hero">Home</a>
        <a href="#target-card">Jobs</a>
        <a href="#target-footer">Contact</a>
      </div>


      <div class="header-right">
        Post a Job
      </div>

      <div className="shrink-into">
        <button onClick={toggleDisplay} className="container">
          <img src="./assets/toolbar.svg" alt="toolbar" />
        </button>
        <div id="inside-toolbar">
          <a href="#target-hero">Home</a>
          <a href="#target-card">Jobs</a>
          <a href="#target-footer">Contact</a>
        </div>
      </div>
    </header>
  );
}
export default Header;