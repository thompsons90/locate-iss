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
  DataSetContainer,
  DataSet,
  CoolFacts,
  BottomContainer,
  Timeline,
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
      <DataSet>
        <h3>Cool Facts:</h3>
      </DataSet>
      <BottomContainer>
        <CoolFacts>
          <li>It flies around the world every 90 minutes</li>
          <li>After the moon, the ISS is the 2nd brightest object at night</li>
          <li>
            There are 2 bathrooms, a gym, 6 sleeping areas, and a 360° bay
            window
          </li>
          <li>6 Spaceships can dock to the station at the same time</li>
        </CoolFacts>

        <h3>History & Timeline:</h3>
        <Timeline>
          <p>
            The ISS took 10 years and over 30 missions to assemble. A
            collaboration representing 15 contries. President Reagan directed
            NASA to build the ISS January 25th, 1984, the first segment lanched
            November 20, 1998, and the rest is history!
          </p>
          <p>
            You can find an up-t0-date comprehensive timeline{" "}
            <a href="https://www.nytimes.com/interactive/2020/11/02/science/iss-20th-anniversary-timeline.html">
              here.
            </a>
          </p>
        </Timeline>
      </BottomContainer>
    </Container>
  );
};
