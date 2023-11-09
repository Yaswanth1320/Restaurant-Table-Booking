import React from "react";
import "./styles/SharedLayout.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/">Retro</NavLink>
          <p>Resturant</p>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="login">Login</NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;
