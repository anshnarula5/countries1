import React from "react";
import {Link} from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="">
      <div className="home">
        <div className="d-flex flex-column align-items-center h-100">
          <div className="text-white mt-5">
            <h1 className="mb-3 display-1">Countries</h1>
          </div>
          <div className="text-white mt-4">
            <h3 className="mb-3 display-6">Find countries by their flags or in map.</h3>
          </div>
          <div className="text-white mb-5">
            <h3 className="mb-3 display-6"> Get details of each country on one click.</h3>
          </div>
          <div className="buttons mt-5">
            <Link to = "/map" className = "ab m-3 px-3">Map  <i className="fas fa-globe"></i></Link>
            <Link to = "/country" className = "ab m-3 px-3">Flags <i className="fas fa-flag"></i> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
