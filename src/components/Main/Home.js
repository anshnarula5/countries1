import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="">
      <div class="home">
        <div class="d-flex flex-column align-items-center h-100">
          <div class="text-white mt-5">
            <h1 class="mb-3 display-1">Countries</h1>
          </div>
          <div class="text-white mt-4">
            <h3 class="mb-3 display-6">Find countries by their flags or in map.</h3>
          </div>
          <div class="text-white mb-5">
            <h3 class="mb-3 display-6"> Get details of each country on one click.</h3>
          </div>
          <div className="buttons mt-5">
            <a href = "/map" className = "ab m-3 px-3">Map  <i class="fas fa-globe"></i></a>
            <a href = "/country" className = "ab m-3 px-3">Flags <i class="fas fa-flag"></i> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
