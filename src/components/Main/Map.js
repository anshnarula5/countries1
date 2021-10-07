import React, { useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { useGetNameQuery } from "../../redux/nameApi";
import "./Map.css";
import loading from "../../loading.svg";

am4core.useTheme(am4themes_animated);

const Map = () => {
  const [country, setCountry] = useState("");
  const { data, isFetching } = useGetNameQuery(country);
  const detail = !data ? "Loading" : data[0];

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.TreeMap);

    // ... chart code goes here ...
    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      /* Create map instance */
      var chart = am4core.create("chartdiv", am4maps.MapChart);

      /* Set map definition */
      chart.geodata = am4geodata_worldLow;

      /* Set projection */
      chart.projection = new am4maps.projections.Miller();

      /* Create map polygon series */
      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      /* Make map load polygon (like country names) data from GeoJSON */
      polygonSeries.useGeodata = true;

      /* Configure series */
      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.applyOnClones = true;
      polygonTemplate.togglable = true;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.nonScalingStroke = true;
      polygonTemplate.strokeOpacity = 0.5;
      polygonTemplate.fill = chart.colors.getIndex(0);
      var lastSelected;
      polygonTemplate.events.on("hit", function (ev) {
        if (lastSelected) {
          // This line serves multiple purposes:
          // 1. Clicking a country twice actually de-activates, the line below
          //    de-activates it in advance, so the toggle then re-activates, making it
          //    appear as if it was never de-activated to begin with.
          // 2. Previously activated countries should be de-activated.
          lastSelected.isActive = false;
        }
        ev.target.series.chart.zoomToMapObject(ev.target);
        if (lastSelected !== ev.target) {
          lastSelected = ev.target;
          setCountry(ev.target.dataItem.dataContext.name);
        }
      });

      /* Create selected and hover states and set alternative fill color */
      var ss = polygonTemplate.states.create("active");
      ss.properties.fill = chart.colors.getIndex(2);

      var hs = polygonTemplate.states.create("hover");
      hs.properties.fill = chart.colors.getIndex(4);

      // Hide Antarctica
      polygonSeries.exclude = ["AQ"];

      // Small map
      chart.smallMap = new am4maps.SmallMap();
      // Re-position to top right (it defaults to bottom left)
      chart.smallMap.align = "right";
      chart.smallMap.valign = "top";
      chart.smallMap.series.push(polygonSeries);

      // Zoom control
      chart.zoomControl = new am4maps.ZoomControl();

      var homeButton = new am4core.Button();
      homeButton.events.on("hit", function () {
        chart.goHome();
      });

      homeButton.icon = new am4core.Sprite();
      homeButton.padding(7, 5, 7, 5);
      homeButton.width = 30;
      homeButton.icon.path =
        "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
      homeButton.marginBottom = 10;
      homeButton.parent = chart.zoomControl;
      homeButton.insertBefore(chart.zoomControl.plusButton);
    }); // end am4core.ready()
  }, []);
  return (
    <div className="container">
      <div className="row map">
        <div className="col-md-9 mt-5">
          <div id="chartdiv"></div>
        </div>
        <div className="col-md-3 text-center mt-5">
          {!country ? (
            <h4 className="mt-5">Click on a country to view details</h4>
          ) : isFetching ? (
            <img
              src={loading}
              alt=""
              style={{ width: "200px", height: "200px" }}
              className="col-md-8 offset-5"
            />
          ) : (
            <div>
              <img
                className="card-img-top mt-5"
                src={detail.flags[0]}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title display-5">{detail.name.common}</h5>
                <p className="card-text">
                  {detail?.region} ({detail?.subregion})
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Map;
