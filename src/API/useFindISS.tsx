// import axios from "axios";
import { useEffect, useState } from "react";
// import { Nullable } from "../global";
// import { SatellitePositions } from "../constants";

export const UseFindISS = () => {
  const [location, setLocation] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLocation(data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <ul>
        <li>{location}</li>
      </ul>
    </>
  );
};

//  -----------------------------------------------------
// export const UseFindISS = require("axios");

// axios
//   .get("https://api.wheretheiss.at/v1/satellites/25544&units=miles")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {});

//  -----------------------------------------------------
// const [satellitePositions, setSatellitePositions] =
//   useState<Nullable<SatellitePositions>>(null);
// const fetchPosition = useCallback(async () => {
//   const res = await axios.get<SatellitePositions>(`${url}`);
//   setSatellitePositions(res.data);
// }, []);
// useEffect(() => {
//   fetchPosition();
// }, [fetchPosition]);
// return satellitePositions;
