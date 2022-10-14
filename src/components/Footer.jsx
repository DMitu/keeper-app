import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return <React.StrictMode>
    <footer>
    <p>Copyright © {year}</p>
    </footer>
    
  </React.StrictMode>
}
export default Footer;