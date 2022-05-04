import { LatLngExpression } from "leaflet";

// const [center, setCenter] = useState<LatLngExpression>([0, 0]);

export const center = () => {
  return (async () => {
    try {
      const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";
      const res = await fetch(url);
      const data = await res.json();
      const centerData: LatLngExpression = [data.latitude, data.longitude];
      console.log(centerData);
      return await centerData;
    } catch (err) {
      console.log(err);
    }
  })();
};
