export interface Country {
  name: {
    common: string;
    official: string;
  };
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: Object;
  capital?: string[] | null;
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: Object;
  latlng?: [number, number];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  flag?: string;
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population?: number;
  timezones?: string[];
  continents?: string[];
  flags?: {
    png: string;
    svg: string;
  };
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
  startOfWeek?: string;
  capitalInfo?: {
    latlng?: [number, number];
  };
  postalCode?: {
    format?: string;
    regex?: string;
  };
}
