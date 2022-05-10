import "./Styles.scss";
import { LatLngExpression } from "leaflet";

import { useEffect, useState } from "react";
import { getCenter } from "../API/getCenter";
import { Map } from "../components/Map";
import { Altitude } from "../API/Altitude";

export const Landing = () => {
  const [center, setCenter] = useState<LatLngExpression | null>(null);
  useEffect(() => {
    if (center === null) {
      getCenter().then((x) => {
        const newCenter: LatLngExpression = x as LatLngExpression;
        setCenter(newCenter);
      });
    }
  }, []);

  const showMap = () => {
    if (center !== null) {
      return <Map center={center} />;
    }
  };

  return (
    <div id="main-container">
      <h1>International Space Station </h1>
      <h2>
        <b>Location</b>
      </h2>
      <div id="data-container">
        {/* Move map container to component */}
        <div id="map-container">
          {/* put the MapContainer in a conditional to wait for the API data to load, THEN render our map data */}
          {showMap()}
        </div>
      </div>
      <div id="iss-data-container">
        <div className="data-container">
          <p>Latitude:</p>
          {
            // <Latitude />
          }
        </div>
        <div className="data-container">
          <p>Longitude:</p>
          {/* <Longitude /> */}
        </div>
        <div className="data-container">
          <p>Velocity:</p>
          {/* <Velocity /> */}
        </div>
        <div className="data-container">
          <p>Altitude:</p>
          <p id="Altitude"></p>
        </div>
      </div>
      <div id="marker">{/* <MapMarker /> */}</div>
    </div>
  );
};
