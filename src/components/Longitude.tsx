import { useEffect, useState } from "react";
// import { URL } from "./url";

export const Longitude = () => {
  const [longitude, setLongitude] = useState();
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let lng = data.longitude;
          let lngData = lng.toFixed(4);
          setLongitude(lngData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);
  return (
    <div id="Longitude">
      <p>Longitude:</p>
      {longitude}
    </div>
  );
};
