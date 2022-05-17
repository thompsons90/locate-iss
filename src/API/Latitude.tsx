import { useEffect, useState } from "react";

export const Latitude = () => {
  const [latitude, setLatitude] = useState();
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let lat = data.latitude;
        let latData = lat.toFixed(4);
        setLatitude(latData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div id="Latitude">{latitude}</div>;
};
