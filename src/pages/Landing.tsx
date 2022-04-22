// import { UseFindISS } from "../API/useFindISS";
import "./Styles.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGetLatitude } from "../API/useGetLatitude";
import { useGetLongitude } from "../API/useGetLongitude";
import { Velocity } from "../components/Velocity";
// import { Altitude } from "../components/Altitude";
import { Longitude } from "../components/Longitude";
import { Latitude } from "../components/Latitude";
// import { MapMarker } from "../API/getLatitude";

export const Landing = () => {
  return (
    <div id="main-container">
      <h1>International Space Station</h1>
      <h2>
        <b>Location</b>
      </h2>
      <div id="data-container">
        <div id="iss-data-container">
          <div className="data-container">
            <Latitude />
          </div>
          <div className="data-container">
            <Longitude />
          </div>
          <div className="data-container">
            <Velocity />
          </div>
          <div className="data-container">{/* <Altitude /> */}</div>
        </div>
        <div id="map-container">
          <MapContainer center={[useGetLatitude(), useGetLongitude()]} zoom={5}>
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
      <div id="marker">{/* <MapMarker /> */}</div>
    </div>
  );
};
