// import { MapLocation } from "../utils";
import "./Styles.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useGetLatitude } from "../API/useGetLatitude";
import { useGetLongitude } from "../API/useGetLongitude";
import { Velocity } from "../components/Velocity";
import { Altitude } from "../components/Altitude";
import { Longitude } from "../components/Longitude";
import { Latitude } from "../components/Latitude";
import { useEffect } from "react";
// import { MapMarker } from "../API/getLatitude";

const mapLocation: LatLngExpression = [0, 0];

export const Landing = () => {
  // useEffect(() => {
  //   const newPosition: LatLngExpression = [];
  // });
  return (
    <div id="main-container">
      {mapLocation}
      {useGetLongitude}
      <h1>International Space Station</h1>
      <h2>
        <b>Location</b>
      </h2>
      <div id="data-container">
        <div id="map-container">
          <MapContainer center={[-75, -20]} zoom={1}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[useGetLatitude(), useGetLongitude()]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
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
          {/* <Altitude /> */}
        </div>
      </div>
      <div id="marker">{/* <MapMarker /> */}</div>
    </div>
  );
};
