import * as React from "react";
import { UseFindISS } from "./API/useFindISS";
// import { SatellitePositions } from "./constants";
import { Data } from "./Data";
import { Nullable } from "./global";

export const Landing = () => {
  return (
    <div id="background">
      <div id="lat"></div>
      <div id="issMap">
        <UseFindISS />
      </div>
    </div>
  );
};
