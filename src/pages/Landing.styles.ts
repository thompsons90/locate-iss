import styled from "styled-components";
import { device } from "../utils";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Orbitron", sans-serif;
  text-align: center;
  color: white;
`;

export const HeaderContainer = styled.div`
  text-shadow: #2f3e46 1.5px 1.5px;
  letter-spacing: 2px;
`;

export const DataContainer = styled.div`
  width: 100vw;
  height: 50%;
  overflow: hidden;
  text-align: right;
  box-shadow: 2px 2px 2px 1px rgb(78, 78, 78);
  border-top: 1px solid #5890cb;
`;

export const MapContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const LeafletContainer = styled.div`
  width: 100vw;
  height: 100px;
`;

export const StatsContainer = styled.div`
  font-size: 16px;
  width: 100vw;
  text-align: center;
  box-shadow: 2px 2px 2px 1px rgb(78, 78, 78);
  background-image: linear-gradient(
    140deg,
    #5890cb 0%,
    #2f3e46 35%,
    transparent 99.5%
  );
  h3 {
    letter-spacing: 1.5px;
    margin-top: 0px;
    margin-bottom: 0px;
    
`;

export const DataSetContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const DataSet = styled.div`
  text-shadow: #2f3e46 1.5px 1.5px;
  h3 {
    letter-spacing: 3px;
  }
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const CoolFacts = styled.ul`
  background-color: #5890cb;
  list-style: none;
  font-size: 16px;
  width: 100%;
  border: 2px solid 5890cb;
  padding: 0px;
  letter-spacing: 1.5px;
  li {
    line-height: 1.65;
    padding-top: 10px;
    padding-bottom: 10px;
    &: before {
      content: "🚀";
    }
  }
  @media ${device.tablet} {
  }
`;

export const BottomContainer = styled.div`
  @media ${device.desktop} {
    background-color: gray;
  }
`;

export const Timeline = styled.div`
  background-color: #5890cb;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: 1.5px;
  a {
    &:hover {
      color: #464646;
    }
  }
`;
