import { LatLngExpression } from 'leaflet';
import { URL } from './Constants';

export const getCenter = async (): Promise<LatLngExpression> => {
  let tryCount = 0;
  
  while (tryCount < 3) {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      const centerData = [data.latitude, data.longitude] as LatLngExpression;
      return centerData;
    } catch (err) {
      tryCount++;
      console.log(err);
    }

  }
  alert('Houston, we have a problem... please check internet connection and reload the page.')
  return ([0, 0]);
};
