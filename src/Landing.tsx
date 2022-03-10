import * as React from "react";
import { UseFindISS } from "./API/useFindISS";

export const Landing = () => {
  return (
    <div id="background">
      <div className="main-container">
        <div className="header"></div>
        <div className="location-container">
          <UseFindISS />
        </div>
      </div>
    </div>
  );
};
