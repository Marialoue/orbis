import { PolygonLayer } from "deck.gl";

export const polygonLine = (coords) => {
  return new PolygonLayer({
    id: "polygon-layer",
    data: coords,
    pickable: true,
    stroked: true,
    filled: true,
    lineWidthMinPixels: 1,
    getPolygon: (d) => d.data,
    getFillColor: [250, 0, 0, 20],
    getLineColor: [80, 80, 80],
    getLineWidth: 1,
  });
};
