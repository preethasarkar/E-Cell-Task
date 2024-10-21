import React, { useState } from "react";

function Header() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme() {
    const body = document.body;
    setIsDarkTheme(!isDarkTheme);

    if (!isDarkTheme) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  function toggleDisplay() {
    const cont = document.getElementById("inside-toolbar");
    console.log(cont);
    if (cont.style.display === 'none') {
      cont.style.display = 'flex';
      cont.style.flexDirection = 'column';

    }

    else {
      cont.style.display = 'none';
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
        {/*Change theme*/}
        <button onClick={toggleTheme}>{isDarkTheme ? "Light Theme" : "Dark Theme"}</button>
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