import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { countyLayer, regionLayer, polygon } from "./MapLayer";

// "mapbox://styles/mapbox/dark-v9"

const Map = () => {
  // initial viewstate
  const [viewState, setViewState] = useState({
    latitude: 62.483208,
    longitude: 13.927503,
    zoom: 4,
    pitch: 30,
    bearing: 0,
  });

  // token for mapbox api
  const mapToken = process.env.REACT_APP_MAP_TOKEN;

  const [showCounty, setShowCounty] = useState(true);

  const handleClick = () => {
    setShowCounty(!showCounty);
  };


  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => {
        setViewState({ ...viewState });
      }}
      controller={true}
      layers={countyLayer()}
      getTooltip={({ object }) =>
        object && showCounty
          ? `County: ${object.properties.name}\n Population: ${object.properties.population}\n 
          Fully vaccinated: ${object.properties.fullyVaccinated[0]}\n One dose: ${object.properties.oneDose[0]}`
          : null
      }
    >
      <StaticMap
        mapStyle={"mapbox://styles/mapbox/light-v8"}
        // preventStyleDiffing={true}
        // reuseMaps
        mapboxApiAccessToken={mapToken}
      />

      {/* <div className="legend">
        <p></p>
      </div> */}
    </DeckGL>
  );
};

export default Map;
