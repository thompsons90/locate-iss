import { useEffect, useState } from "react";
// import { URL } from "./url";

export const Velocity = () => {
  const [location, setLocation] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let vel = data.velocity;
        let velData = vel.toFixed(2);
        setLocation(velData);
        console.log(velData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div id="velocity">
        <p>Velocity:</p>
        {location}
      </div>
    </>
  );
};
