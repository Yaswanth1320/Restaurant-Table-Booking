import React from "react";
import "./styles/SharedLayout.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function SharedLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/">Retro</NavLink>
          <p>Resturants</p>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="book">Booking</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="login">Login</NavLink>
        </div>
      </nav>
      <main className="outlet">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default SharedLayout;
