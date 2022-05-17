import { useEffect, useState } from "react";
// import { URL } from "./url";

export const Velocity = () => {
  const [velocity, setVelocity] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let vel = data.velocity;
        let velData = vel.toFixed(2);
        setVelocity(velData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div id="velocity">{velocity}</div>
    </>
  );
};
