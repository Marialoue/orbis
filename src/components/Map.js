import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { polygonLine } from "./MapLayer";

const Map = () => {
  const mapToken = process.env.REACT_APP_MAP_TOKEN;

  // initial data coords
  const simple = [
    [18.58511, 59.49518],
    [18.408686, 59.010832],
    [17.408525, 59.295714],
    [17.732621, 59.691677],
    [18.58511, 59.49518],
  ];
  // initial data coords with holes
  const complex = [
    [
      [-122.4, 37.7],
      [-122.4, 37.8],
      [-122.5, 37.8],
      [-122.5, 37.7],
      [-122.4, 37.7],
    ],
    [
      [-122.45, 37.73],
      [-122.47, 37.76],
      [-122.47, 37.71],
      [-122.45, 37.73],
    ],
  ];

  // coords that will change state, depending on fetch
  const [polygonCoords, setPolygonCoords] = useState([
    {
      data: simple,
    },
  ]);

  const [viewState, setViewState] = useState({
    latitude: 62.483208,
    longitude: 16.927503,
    zoom: 4,
    pitch: 15,
    bearing: 0,
  });

  return (
    <DeckGL
      viewState={viewState}
      layers={[polygonLine(polygonCoords)]}
      onViewStateChange={({ viewState }) => {
        setViewState({ ...viewState });
      }}
      controller={true}
    >
      <StaticMap
        mapboxApiAccessToken={mapToken}
        // may not be allowed due to ToS
        // attributionControl={false}
      />
    </DeckGL>
  );
};

export default Map;
