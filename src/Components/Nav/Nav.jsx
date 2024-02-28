import "./Nav.css";
import React from "react";
import { NavLink, useMatch } from "react-router-dom";

function Nav() {
  const aboutMatch = useMatch("/about")
  return (
    <nav className="nav-wrapper">
      { aboutMatch && <NavLink to={'/'}>Home</NavLink>}
      <NavLink to={'/about'}>About</NavLink>
    </nav>
  );
}

export default Nav;
