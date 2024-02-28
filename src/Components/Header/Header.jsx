import "./Header.css";
import React from "react";

function Header() {
  return (
    <>
      <div className='header-wrapper'>
        <h1>Devin Altobello</h1>
        <h2>Software Engineer</h2>
        <a href='mailto:dl.altobello@gmail.com' class='email'>
          dl.altobello@gmail.com
        </a>
      </div>
    </>
  );
}

export default Header;
