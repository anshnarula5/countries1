import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand display-4" to="/">
          <h2>Countries</h2>
        </Link>
        <ul className="navbar-nav d-flex flex-row ">
          <li className="nav-item mx-3">
            <Link to="/map" className="nav-link fs-5">
              Map
            </Link>
          </li>
          <li className="nav-item active mx-3">
            <Link to="/country" className="nav-link fs-5 ">
              Flags{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
