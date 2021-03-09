import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";

const Map = () => {
  const mapToken = process.env.REACT_APP_MAP_TOKEN;

  const [viewState, setViewState] = useState({
    latitude: 62.283208,
    longitude: 16.927503,
    zoom: 4,
    pitch: 15,
    bearing: 0,
  });
  

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({viewState}) => {setViewState({...viewState});}}
      controller={true}
    >
      <StaticMap mapboxApiAccessToken={mapToken} />
    </DeckGL>
  );
};

export default Map;
