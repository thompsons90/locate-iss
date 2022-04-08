import { useEffect, useState } from "react";
// import { URL } from "./url";

export const useGetLongitude = () => {
  //  useGetLongitude = costom hook naming convention
  //  now I need to make two costume hooks, move the logic over to those
  //  then go back and change these back to componets to render on the page

  const [location, setLocation] = useState(0);
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
  return location;
};
