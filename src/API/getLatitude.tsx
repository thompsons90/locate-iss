// import axios from "axios";
import { useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Data } from "../Data";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SatellitePositions } from "../constants";
import axios from "axios";

import { Nullable } from "../global";

// export const LatMarker = (LAT: number) => {
//   const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";
//   const [latitude, setLatitude] = useState<SatellitePositions | undefined>(
//     undefined
//   );
//   const fetchLatitude = useCallback(async () => {
//     const res = await axios.get<SatellitePositions>(
//       "https://api.wheretheiss.at/v1/satellites/25544&units=miles"
//     );
//     setLatitude(res.data);
//   }[]);
//   useEffect(() => {
//     fetchLatitude();
//   }, [fetchLatitude]);
//   return latitude;

// async function getLatitude() {
//   const response = await fetch(url);
//   const data = await response.json();
//   const { latitude } = data;
//   console.log(latitude);
//   return latitude;
// }

//   <div id="map-container">
//     <MapContainer center={[latitude, longitude]} zoom={3}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[latitude, longitude]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   </div>;
// getLatitude();
// return (
//   <>
//     <h3>
//       Marker at <span id="lat"></span>
//     </h3>
//   </>
// );
