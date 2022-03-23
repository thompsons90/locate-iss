import { useEffect, useState } from "react";
// import { isTemplateSpan } from "typescript";
// import { Data } from "../Data";

export const UseFindISS = () => {
  const [location, setLocation] = useState([]);

  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(Object.values(data));
        // console.log(data.latitude);
        //  @ts-ignore
        setLocation(Object.entries(data).slice(0, 7));
        // console.log(Object.values(data).slice(0, 7));
        let newLocation = Object.entries(data).slice(0, 7);
        // console.log(newLocation);

        // function isNumber(n: number): boolean {
        //   return typeof n === "number";
        // }

        // const arrNumbers = newLocation.filter(isNumber);
        newLocation.forEach((item) => {
          item.toFixed(4);
        });
        // function newArray(item) {
        //   return item.typeOf === 'number'
        // }
        console.log(arrNumbers);
        // let lat = data.latitude;
        // console.log(lat.toFixed(4));
        // let lng = data.longitude;
        // console.log(lng.toFixed(4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {location.map(([key, value]) => {
        return (
          <h3 key={key}>
            {key}: {value}
          </h3>
        );
      })}
      <h1>{}</h1>
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
