import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className='header-wrapper'>
      <div className='header'>
        <h1 className='name'>Devin Altobello</h1>
        <h2 className='title'>Software Engineer</h2>
        <a className='email' href='mailto:dl.altobello@gmail.com'>
          dl.altobello@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Header;
