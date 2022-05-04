import { useEffect, useState } from "react";
// import { URL } from "../API/url";

export const useGetLatitude = () => {
  const [latitude, setLatitude] = useState(0);
  const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLatitude(data.latitude);
        console.log(latitude);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return latitude;
};
