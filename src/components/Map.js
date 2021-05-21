import { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";
import { COLOR_SCALE } from "./MapLayer";
import DiscreteSlider from "./Slider";
import { GeoJsonLayer } from "@deck.gl/layers";
import counties from "../data/mergedData.json";

const Map = () => {
  // Initial viewstate
  const [viewState, setViewState] = useState({
    latitude: 61.483208,
    longitude: 14.927503,
    zoom: 3.8,
    pitch: 35,
    bearing: 0,
  });

  // Token for mapbox api
  const mapToken = process.env.REACT_APP_MAP_TOKEN;

  // Start visualizing on "2" - i.e. week 1, 2021
  const [currentWeek, setCurrentWeek] = useState(2);
  const [filteredCountyData, setFilteredCountyData] = useState();

  /* Effect that listens in on when currentWeek is changed -
when that happens, do some datamassaging and update GeoJson layer */

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
        getFillColor: (d) => COLOR_SCALE(d.properties.fully),
        updateTriggers: {
          getFillColor: (d) => [d.properties.fully],
        },
        getLineColor: [80, 80, 80],
        getLineWidth: 1,
      })
    );
  }, [currentWeek]);

  // Implement FlyTo when onClick region?

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
          `${object.properties.name}\n Population: ${
            object.properties.population
          }\n 
          Fully vaccinated: 
          ${object.properties.fully} = ${(
            (object.properties.fully / object.properties.population) *
            100
          ).toFixed(1)}%

          One dose: 
          ${object.properties.one} = ${(
            (object.properties.one / object.properties.population) *
            100
          ).toFixed(1)}%`
        }
        // For navigation controll to work we need a context provider from Mapbox to render nav as child
        ContextProvider={MapContext.Provider}
      >
        <StaticMap
          reuseMaps
          mapStyle={"mapbox://styles/mapbox/light-v10"}
          mapboxApiAccessToken={mapToken}
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
