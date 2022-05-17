import "./Styles.scss";
import { LatLngExpression } from "leaflet";

import { useEffect, useState } from "react";
import { getCenter } from "../API/getCenter";
import { Map } from "../components/Map";
import { Altitude } from "../API/Altitude";
import {
  Container,
  DataContainer,
  HeaderContainer,
  StatsContainer,
  DataSet,
  CoolFacts,
} from "./Landing.styles";
import { MapContainer } from "react-leaflet";
import { Latitude } from "../API/Latitude";
import { Longitude } from "../API/Longitude";
import { Velocity } from "../API/Velocity";

export const Landing = () => {
  const [center, setCenter] = useState<LatLngExpression | null>(null);
  useEffect(() => {
    if (center === null) {
      getCenter().then((x) => {
        const newCenter: LatLngExpression = x as LatLngExpression;
        setCenter(newCenter);
      });
    }
  }, []);

  const showMap = () => {
    if (center !== null) {
      return <Map center={center} />;
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <h1>International Space Station </h1>
        <h2>
          <b>Location</b>
        </h2>
      </HeaderContainer>
      <DataContainer>
        <MapContainer>{showMap()}</MapContainer>
      </DataContainer>
      <StatsContainer>
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
      </StatsContainer>
      <DataSet>
        <h3>Cool Facts:</h3>
      </DataSet>
      <CoolFacts>
        <li>It flies around the world every 90 minutes</li>
        <li>After the moon, the ISS is the 2nd brightest object at night</li>
        <li>
          There are 2 bathrooms, a gym, 6 sleeping areas, and a 360° bay window
        </li>
        <li>6 Spaceships can dock to the station at the same time</li>
      </CoolFacts>
    </Container>
  );
};
