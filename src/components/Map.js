import { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap, NavigationControl, MapContext } from "react-map-gl";
import { COLOR_SCALE } from "./MapLayer";
import DiscreteSlider from "./Slider";
import { GeoJsonLayer } from "@deck.gl/layers";
import counties from "../data/counties.js";

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

  // Start visualizing on "2" - that should be week 1, 2021
  const [currentWeek, setCurrentWeek] = useState(2);

  const [filteredCountyData, setFilteredCountyData] = useState();

  /*
  Effect that listens in on when currentWeek is changed -
  when that happens, do some datamassaging and update GeoJson layer
  */

  useEffect(() => {
    let data = counties;
    if (data.features[0] === undefined) {
      return;
    }
    data.features.forEach((data) => {
      data.properties.one = data.properties.oneDose[currentWeek];
      data.properties.fully = data.properties.fullyVaccinated[currentWeek];
    });
    setFilteredCountyData(
      new GeoJsonLayer({
        id: "geojson-layer",
        data: data,
        pickable: true,
        stroked: true,
        filled: true,
        extruded: true,
        wireframe: true,
        lineWidthMinPixels: 1,
        getPolygon: (d) => d.data,
        getElevation: (d) => d.properties.population / 100,
        getFillColor: (d) => COLOR_SCALE(d.properties.fully),
        // This is the magic right here! Magic it update. Great stuff.
        // Basically, when a value within the array is changes (one or fully)
        // that will trigger an update of the layer. Which is what we want :)
        updateTriggers: {
          getFillColor: (d) => [d.properties.one, d.properties.fully],
        },
        getLineColor: [80, 80, 80],
        getLineWidth: 1,
      })
    );
  }, [currentWeek]);

  return (
    <>
      <DeckGL
        viewState={viewState}
        onViewStateChange={({ viewState }) => {
          setViewState({ ...viewState });
        }}
        controller={true}
        layers={[filteredCountyData]}
        getTooltip={({ object }) =>
          object &&
          `County: ${object.properties.name}\n Population: ${object.properties.population}\n 
          Fully vaccinated: ${object.properties.fullyVaccinated[currentWeek]}\n One dose: ${object.properties.oneDose[currentWeek]}`
        }
        // For navigation controll to work we need a context provider from Mapbox to render nav as child
        ContextProvider={MapContext.Provider}
      >
        <StaticMap
          mapStyle={"mapbox://styles/mapbox/light-v8"}
          mapboxApiAccessToken={mapToken}
          attributionControl={false}
        />

        <NavigationControl
          className="nav"
          onViewStateChange={({ viewState }) => {
            setViewState({ ...viewState });
          }}
        />
      </DeckGL>
      <DiscreteSlider
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
    </>
  );
};

export default Map;
