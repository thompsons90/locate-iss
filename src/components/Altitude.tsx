import { useEffect, useState } from "react";
// import { URL } from "./url";

export const Altitude = () => {
  const [altitude, setAltitude] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let alt = data.altitude;
          let altData = alt.toFixed(3);
          setAltitude(altData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);
  return (
    <>
      <div id="Altitude">{altitude}</div>
    </>
  );
};
