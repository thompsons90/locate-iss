import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const UseFindISS = require("axios");

// Make a request for a user with a given ID
axios
  .get("https://api.wheretheiss.at/v1/satellites/25544&units=miles")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// export const useFindISS = () => {
//   const [locationResults, setLocationResults] = useState;
//    <Nullable<locationResults>>(null);
//   const fetchLocation = useCallback(async () => {
//     const res = await axios.get(
//        <LocationResults>
//       `https://api.wheretheiss.at/v1/satellites/25544&units=miles`
//     );
//     setLocationResults(res.data);
//   }, []);
//   useEffect(() => {
//     fetchLocation();
//   }, [fetchLocation]);
//   return locationResults;
//  };
