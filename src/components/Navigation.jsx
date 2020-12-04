import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation.css";
import "boxicons";

export default function Navigation() {
  return (
    <nav className=" navbar bg-white sticky-top border-bottom ">
      <div className="Navigation-firstlink">
        <NavLink
          className="nav-link text-dark h2"
          exact
          activeClassName="active-link"
          to="/"
        >
          Instagram
        </NavLink>
      </div>
      <div className="Navigation-links">
        <NavLink
          className="nav-link text-dark h5"
          exact
          activeClassName="active-link"
          to="/"
        >
          <box-icon name="home" type="solid"></box-icon>
        </NavLink>
        <NavLink
          className="nav-link text-dark h5"
          exact
          activeClassName="active-link"
          to="/explore"
        >
          <box-icon name="compass" type="solid"></box-icon>
        </NavLink>
        <NavLink
          className="nav-link text-dark h5"
          exact
          activeClassName="active-link"
          to="/profile"
        >
          <box-icon name="user"></box-icon>
        </NavLink>
        <NavLink
          className="nav-link text-dark h5"
          exact
          activeClassName="active-link"
          to="/messages"
        >
          <box-icon name="paper-plane"></box-icon>
        </NavLink>
      </div>
    </nav>
  );
}
