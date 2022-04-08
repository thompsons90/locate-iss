import { useEffect, useState } from "react";
// import { URL } from "../API/url";

export const Latitude = () => {
  const [location, setLocation] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let lat = data.latitude;
        let latData = lat.toFixed(4);
        setLocation(latData);
        console.log(latData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div id="latitude">
        <p>Latitude:</p>
        {location}
      </div>
    </>
  );
};
