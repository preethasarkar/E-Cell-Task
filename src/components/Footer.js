import React from "react";

function Footer() {
    let date=new Date().getDate();
    let month=new Date().getMonth()+1;
    let year=new Date().getFullYear();
    console.log(date);
    return (
        <footer id="target-footer"> 
            <hr/>
            <p>{date}/{month}/{year} | <a href="#">Privacy Policy</a> | <a href="#">9860XXXX</a></p>
        </footer>
    );
}

export default Footer;