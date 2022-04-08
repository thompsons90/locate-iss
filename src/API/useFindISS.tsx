import { useEffect, useState } from "react";
// import { URL } from "./url";

export const UseFindISS = () => {
  const [location, setLocation] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //  @ts-ignore
        // setLocation(Object.entries(data).slice(0, 7));

        let lat = data.latitude;
        let latData = lat.toFixed(4);
        setLocation(latData);

        // let lng = data.longitude;
        // lng = lng.toFixed(4);
        // let alt = data.altitude;
        // alt = alt.toFixed(3);
        // let vel = data.velocity;
        // vel = vel.toFixed(2);
        console.log(latData);
        // return latData;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(latData);
  return (
    <>
      {/* {location.map(([key, value]) => {
        return (
          <h3 key={key}>
            {key}: {value}
          </h3>
        );
      })} */}
      <div id="latitude">
        <p>Latitude:</p>
        {location}
      </div>
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
