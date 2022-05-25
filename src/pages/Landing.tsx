import "./Styles.scss";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { getCenter } from "../API/getCenter";
import { Map } from "../components/Map";
import {
  Container,
  DataContainer,
  HeaderContainer,
  DataSet,
} from "./Landing.styles";
import { MapContainer } from "react-leaflet";
import { Stats } from "../components/Stats";
import { Facts } from "../components/Facts";

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
      <Stats/>
      <DataSet>
        <h3>Cool Facts:</h3>
      </DataSet>
      <Facts/>
    </Container>
  );
};
