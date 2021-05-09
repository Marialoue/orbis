import { PolygonLayer, GeoJsonLayer } from "@deck.gl/layers";
import counties from "../data/counties.js";
import regions from "../data/regions.js";
import { scaleThreshold } from "d3-scale";

// TODO: change regions to vaccination data

// landskap: https://raw.githubusercontent.com/perliedman/svenska-landskap/master/svenska-landskap-klippt.geo.json?short_path=65dcbc0
// export const polygon = () => {
//   return new PolygonLayer({
//     id: "polygon-layer",
//     data: regions,
//     pickable: true,
//     stroked: true,
//     filled: true,
//     lineWidthMinPixels: 1,
//     getPolygon: (d) => d.data,
//     getFillColor: [250, 0, 0, 20],
//     getLineColor: [80, 80, 80],
//     getLineWidth: 1,
//   });
// };

export const regionLayer = () => {
  return new GeoJsonLayer({
    id: "geojson-layer",
    data: regions,
    pickable: true,
    stroked: true,
    filled: true,
    extruded: true,
    wireframe: true,
    lineWidthMinPixels: 1,
    getElevation: (d) => Math.sqrt(d.properties.population),
    getPolygon: (d) => d.data,
    getFillColor: (d) => COLOR_SCALE(d.properties),
    getLineColor: [80, 80, 80],
    getLineWidth: 1,
  });
};

const green = [
  [247, 252, 185, 150],
  [217, 240, 163, 150],
  [173, 221, 142, 150],
  [120, 198, 121, 150],
  [65, 171, 93, 150],
  [35, 132, 67, 150],
  [0, 104, 55, 150],
  [0, 69, 41, 150],
];

const blue = [
  [8, 48, 107, 150],
  [8, 81, 156, 150],
  [33, 113, 181, 150],
  [66, 146, 198, 150],
  [107, 174, 214, 150],
  [158, 202, 225, 150],
  [198, 219, 239, 150],
  [222, 235, 247, 150],
  [247, 251, 255, 150],
  [247, 252, 185, 150],
  [217, 240, 163, 150],
  [173, 221, 142, 150],
  [120, 198, 121, 150],
  [65, 171, 93, 150],
  [35, 132, 67, 150],
  [0, 104, 55, 150],
  [0, 69, 41, 150],
];

export const COLOR_SCALE = scaleThreshold()
  .domain([
    10000,
    20000,
    30000,
    40000,
    50000,
    60000,
    70000,
    80000,
    90000,
    100000,
    200000,
    // 300000,
    // 400000,
    // 500000,
    // 600000,
    // 700000,
    // 800000,
    900000,
    1000000,
    1500000,
    // 2000000,
  ])
  .range(blue);

export const countyLayer = () => {
  return new GeoJsonLayer({
    id: "geojson-layer",
    data: counties,
    pickable: true,
    stroked: true,
    filled: true,
    extruded: true,
    wireframe: true,
    lineWidthMinPixels: 1,
    getElevation: (d) => Math.sqrt(d.properties.population),
    getPolygon: (d) => d.data,
    getFillColor: (d) => COLOR_SCALE(d.properties.fullyVaccinated[0]),
    getLineColor: [80, 80, 80],
    getLineWidth: 1,
  });
};
