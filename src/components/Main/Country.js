import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { useGetCountriesQuery } from "../../redux/countryApi";
import loading from "../../loading.svg"
import "./Country.css";

const Country = () => {
  const { data: countries, isFetching } = useGetCountriesQuery();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [exist, setExist] = useState(false)
  useEffect(() => {
    fetch(`https://restcountries.com/v3/name/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setFiltered(data)
        data.message ? setExist(false) : setExist(true)
      });
  }, [search, setFiltered]);

  if (isFetching)
    return (
      <div className = "row">
        <img src={loading} alt="" style={{ width: "200px", height: "200px"}} className = "col-md-8 offset-md-5 offset-3"/>
      </div>
    );
  return (
    <div className = "container">
      <div className="search row input-group rounded ">
        <label htmlFor="search" className="display-6 text-center my-3">
          Search for a country
        </label>
        <div className="form-group mx-sm-3 col-md-4 offset-3">
          <input
            type="text"
            className="form-control rounded mb-3 "
            id="search"
            placeholder="Country"
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="countries">
        {search && !exist ? <h1 style = {{height : "100%"}}>No country found</h1> :
        filtered.message
          ? countries?.map((country) => (
              <CountryCard key={Math.random()} country={country} />
            ))
          : filtered?.map((country) => (
              <CountryCard key={Math.random()} country={country} />
          ))
          }
      </div>
    </div>
  );
};

export default Country;
