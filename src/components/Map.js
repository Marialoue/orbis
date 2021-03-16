import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { polygonLine } from "./MapLayer";
import data from "../data/regions.js";

const Map = () => {
  // initial viewstate
  const [viewState, setViewState] = useState({
    latitude: 62.483208,
    longitude: 16.927503,
    zoom: 4,
    pitch: 15,
    bearing: 0,
  });
  // token for mapbox api
  const mapToken = process.env.REACT_APP_MAP_TOKEN;

  const county = data[0].features[23].geometry.coordinates;
  console.log("one county:", county);
  console.log("data.length:", data[0].features.length);

  const countyCoords = Object.entries(data[0].features).map(([x, y]) => ({
    id: x,
    coords: y.geometry.coordinates,
  }));
  console.log("map with object / coords: ", countyCoords);

  const countyCode = Object.entries(data[0].features).map(([x, y]) => ({
    id: x,
    landskap: y.properties.landskap,
    landskapskod: y.properties.landskapskod,
  }));
  console.log("map with object / codes: ", countyCode);

  // coords for the polygon
  const [polygonCoords, setPolygonCoords] = useState([
    {
      data: county,
    },
  ]);

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => {
        setViewState({ ...viewState });
      }}
      controller={true}
      layers={[polygonLine(polygonCoords)]}
      getTooltip={({ object }) =>
        object && `Landskap: ${data[0].features[23].properties.landskap}`
      }
    >
      <StaticMap mapboxApiAccessToken={mapToken} />
    </DeckGL>
  );
};

export default Map;
