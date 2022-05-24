import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = (props: any) => {
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
