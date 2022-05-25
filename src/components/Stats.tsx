import { Altitude } from "../API/Altitude";
import { Latitude } from "../API/Latitude";
import { Longitude } from "../API/Longitude";
import { Velocity } from "../API/Velocity";
import { DataSet, DataSetContainer, StatsContainer } from "../pages/Landing.styles";

export const Stats = () => (
    <StatsContainer>
        <h3>ISS Stats in Kilometers</h3>
        <DataSetContainer>
          <DataSet>
            <p>Latitude: </p>
            <Latitude />
          </DataSet>
          <DataSet>
            <p>Longitude: </p>
            <Longitude />
          </DataSet>
          <DataSet>
            <p>Velocity: </p>
            <Velocity />
          </DataSet>
          <DataSet>
            <p>Altitude: </p>
            <Altitude />
          </DataSet>
        </DataSetContainer>
      </StatsContainer>
);