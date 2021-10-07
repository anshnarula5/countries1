import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/detail/${country.name.common}`} style={{ textDecoration: 'none' }} >
      <div className="cards">
        <img src={country.flags[0]} alt="" />
        <div className="info">
          <h2>{country.name.common}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
