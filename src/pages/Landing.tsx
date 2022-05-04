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
import { useEffect, useState } from "react";
import { center } from "../API/center";
// import { MapMarker } from "../API/getLatitude";

// const center: LatLngExpression = [useGetLatitude(), 0];
// const center = { lat: useGetLatitude, lng: useGetLongitude };
const test = center();

export const Landing = () => {
  // useEffect(() => {
  //   const newPosition: LatLngExpression = [];
  // });
  const [useTest, setUseTest] = useState<LatLngExpression>([0, 0]);
  console.log("rendering");
  useEffect = () => {
    setInterval(() => {
      setUseTest(center());
    }, 5000);
  };

  return (
    <div id="main-container">
      <h1>International Space Station </h1>

      <h2>
        <b>Location</b>
      </h2>
      <div id="data-container">
        <div id="map-container">
          <MapContainer center={useTest} zoom={5}>
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
