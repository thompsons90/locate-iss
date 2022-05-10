export const getCenter = async () => {
  try {
    const url = "https://api.wheretheiss.at/v1/satellites/25544&units=miles";
    const res = await fetch(url);
    const data = await res.json();
    const centerData = [data.latitude, data.longitude];
    return centerData;
  } catch (err) {
    console.log(err);
  }
};
