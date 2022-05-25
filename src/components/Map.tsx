import { MapContainer, TileLayer, Marker } from "react-leaflet";

export const Map = (props: any) => {
  //focus on the process of what's going on, the logic, touch on built in library and go
  return (
    <MapContainer center={props.center} zoom={3}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.center}>
      </Marker>
    </MapContainer>
  );
};
