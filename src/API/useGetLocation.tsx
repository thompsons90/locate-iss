import { useEffect, useState, useCallback } from "react";
import { useGetLatitude } from "./useGetLatitude";
import { useGetLongitude } from "./useGetLongitude";
import { LatLngExpression } from "leaflet";
import { setEnvironmentData } from "worker_threads";

export const useGetLocation = () => {
  const position: LatLngExpression = [0, 0];

  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    return json.then(() => {
      // const latitude = data.latitude;
      // const newPosition : LatLngExpression = [data.latitude, data.longitude]
    });
  };

  useEffect(() => {
    fetchData()
      .catch(console.error)
      .then((fetchData) => {
        setLatitude(fetchData.latitude);
        setLongitude(fetchData.longitude);
        // setMapLocation([latitude, longitude])
      });
  }, [fetchData]);
};
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url);
//     const data = response.json().then((data) => {
//       setLatitude(data.latitude);
//       setLongitude(data.longitude);
//     });
//   }
//     const newPosition: LatLngExpression = [latitude, longitude];
//   }, []);
//   return mapLocation;
// };
