import { useState, useEffect } from "react";

export const useGetLongitude = () => {
  const [longitude, setLongitude] = useState(0);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLongitude(data.longitude);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return longitude;
};
