import styled from "styled-components";

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
  border: 1px solid #5890cb;
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
  display: flex;
  justify-content: space-evenly;
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
`;

export const DataSet = styled.div`
  text-shadow: #2f3e46 1.5px 1.5px;
  h3 {
    letter-spacing: 3px;
  }
`;

export const CoolFacts = styled.ul`
  background-color: #5890cb;
  list-style: none;
  font-size: 16px;
  width: 100%;
  height: 380px;
  border: 2px solid 5890cb;
  padding: 0px;
  letter-spacing: 1.5px;
  li {
    line-height: 1.65;
    padding-top: 10px;
    &: before {
      content: "🚀";
    }
  }
`;
