import React, { useState } from "react";
import { Landing } from "./pages/Landing";
import { SatellitePositions } from "./constants";
import { Nullable } from "./global";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const [positionData, setPositionData] =
    useState<Nullable<SatellitePositions>>(null);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <Landing />
      </div>
    </div>
  );
}

export default App;
