import React from "react";
import { SatellitePositions } from "./constants";

interface DataProps {
  positionData: SatellitePositions;
}

export const Data: React.FC<DataProps> = ({ positionData }) => (
  <>{positionData.name}</>
);
