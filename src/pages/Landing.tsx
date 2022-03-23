import { UseFindISS } from "../API/useFindISS";
import "./Styles.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
          <UseFindISS />
        </div>
        <div id="map-container">
          <MapContainer center={[32.795781, -95.451661]} zoom={3}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[32.795781, -95.451661]}>
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
