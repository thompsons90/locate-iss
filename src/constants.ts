//more of a models file

export interface SatellitePositions {
  name: string;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  footprint: number;
  timestamp: number;
  daynum: number;
  solar_lat: number;
  solar_lon: number;
  units: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  timezone_id: string;
  offset: number;
  country_code: string;
  map_url: string;
}
