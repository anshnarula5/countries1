import React from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { useGetNameQuery } from "../../redux/nameApi";
import CountUp from "react-countup";
import loading from "../../loading.svg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Detail = () => {
  
  const params = useParams();
  const country = JSON.stringify(params.name);
  const { data, isFetching } = useGetNameQuery(country);
  if (isFetching)
    return (
      <img
        src={loading}
        alt=""
        style={{ width: "200px", height: "100%" }}
        className="col-md-8 offset-md-5 offset-3"
      />
    );
  const detail = data[0];
  let currencies = []
  if (detail.currencies) {
    currencies = Object.values(detail?.currencies)[0].name
  }
  else {
    currencies = "No Info"
  }
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: detail.latlng[0],
    lng: detail.latlng[1],
  };

  return (
    <div className="container">
      <div className="row detail">
        <div className="left col-md-5  ">
          <div className="d-flex flex-column justify-content-center mt-3 text-center ">
            <img src={detail.flags[0]} alt="" className="shadow mb-3" />
            
            <div className="gmap my-3">
              <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_KEY}>
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={3}
                  center={defaultCenter}
                >
                  <Marker position={defaultCenter}/>
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
        <div className="right col-md-7">
          <div className="d-flex flex-column justify-content-center mt-5 text-center display-6 mx-5">
          <h1 className="display-1 mb-5">{detail.name.common}</h1>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Captail</strong> : {detail.capital}
              </p>
            </div>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Region</strong> : {detail.region}
              </p>
            </div>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Subregion</strong> : {detail.subregion}
              </p>
            </div>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Population</strong> :{" "}
                <CountUp end={detail.population} duration={1} separator="," />
              </p>
            </div>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Area</strong> :
                <CountUp end={detail.area} duration={1} separator="," /> Sq.Kms
              </p>
            </div>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Currency</strong> : {currencies ? currencies : "No Information"}
              </p>
            </div>
            <div className="border-bottom mb-3">
              <p className="mb-3">
                <strong>Borders</strong> :{" "}
                {detail.borders && detail.borders.length > 0
                  ? detail.borders.map((border) => (
                      <span key={Math.random()}>{border} </span>
                    ))
                  : "No borders"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
