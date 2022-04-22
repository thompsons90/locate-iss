import { useEffect, useState } from "react";

export const Latitude = () => {
  const [latitude, setLatitude] = useState();
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let lat = data.latitude;
          let latData = lat.toFixed(4);
          setLatitude(latData);
          console.log(latData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);
  return (
    <div id="Latitude">
      <p>Latitude:</p>
      {latitude}
    </div>
  );
};
