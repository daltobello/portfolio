import "./Nav.css";
import React from "react";

function Nav() {
  return (
    <>
      <ul>
        <li className="list-items">
          <a href='https://experience-exchange.vercel.app/'>
            Experience Exchange
          </a>
        </li>
        <li className="list-items">
          <a href='https://word-atlas.vercel.app/'>Word Atlas</a>
        </li>
        <li className="list-items">
          <a href="https://stretch-tech-theta.vercel.app/">MET Gallery</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
