import { useEffect, useState } from "react";
// import { URL } from "./url";

export const Altitude = () => {
  const [location, setLocation] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let alt = data.altitude;
        let altData = alt.toFixed(3);
        setLocation(altData);
        console.log(altData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div id="Altitude">
        <p>Altitude:</p>
        {location}
      </div>
    </>
  );
};
