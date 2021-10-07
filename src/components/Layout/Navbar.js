import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand display-4" href=".">
          <h2>Countries</h2>
        </a>
        <ul class="navbar-nav d-flex flex-row ">
          <li class="nav-item mx-3">
            <Link to="/map" class="nav-link fs-5">
              Map
            </Link>
          </li>
          <li class="nav-item active mx-3">
            <Link to="/country" class="nav-link fs-5 ">
              Flags{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
