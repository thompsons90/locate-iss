import React, { useState } from "react";
import { Landing } from "./Landing";
import { SatellitePositions } from "./constants";
import { Nullable } from "./global";

function App() {
  const [positionData, setPositionData] =
    useState<Nullable<SatellitePositions>>(null);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <Landing />
        <p>Hello y'all</p>
      </div>
    </div>
  );
}

export default App;
