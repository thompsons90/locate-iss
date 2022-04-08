import { useEffect, useState } from "react";
// import { URL } from "./url";

export const Longitude = () => {
  const [location, setLocation] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let lng = data.longitude;
        let lngData = lng.toFixed(4);
        setLocation(lngData);
        console.log(lngData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(latData);
  return (
    <>
      <div id="longitude">
        <p>Longitude:</p>
        {location}
      </div>
    </>
  );
};
