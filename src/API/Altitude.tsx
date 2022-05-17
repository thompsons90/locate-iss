import { useEffect, useState } from "react";

export const Altitude = () => {
  const [altitude, setAltitude] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
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
  }, []);
  return (
    <>
      <div id="Altitude">{altitude}</div>
    </>
  );
};
