import { URL } from './Constants';

export const getCenter = async () => {
  let tryCount = 0;
  
  while (tryCount < 3) {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      const centerData = [data.latitude, data.longitude];
      return centerData;
    } catch (err) {
      tryCount++;
      console.log(err);
    }

  }
  alert('Houston, we have a problem... please check internet connection and reload the page.')
  return ([0, 0]);
};
