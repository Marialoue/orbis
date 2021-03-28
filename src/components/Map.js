import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { geojsonLayer } from "./MapLayer";

const Map = () => {
  // initial viewstate
  const [viewState, setViewState] = useState({
    latitude: 62.483208,
    longitude: 16.927503,
    zoom: 4,
    pitch: 30,
    bearing: 0,
  });

  // token for mapbox api
  const mapToken = process.env.REACT_APP_MAP_TOKEN;

  function getTooltip({ object }) {
    return (
      object && {
        html: `\
    <div><b>County: </b>${object.properties.name}</div>
    <div><b>Population: </b>${object.properties.population}</div>
    `,
      }
    );
  }

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => {
        setViewState({ ...viewState });
      }}
      controller={true}
      layers={[geojsonLayer()]}
      getTooltip={getTooltip}
    >
      <StaticMap
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        // preventStyleDiffing={true}
        // reuseMaps
        mapboxApiAccessToken={mapToken}
      />
    </DeckGL>
  );
};

export default Map;
