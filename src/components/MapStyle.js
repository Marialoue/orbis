import React, { createContext, useState } from "react";

const MapStyleContext = createContext([{}, () => {}]);

const MapStyleProvider = ({ children }) => {
  const [style, setStyle] = useState({
    tiles: "mapbox://styles/mapbox/light-v8",
  });

  return (
    <MapStyleContext.Provider value={[style, setStyle]}>
      {children}
    </MapStyleContext.Provider>
  );
};

export { MapStyleContext, MapStyleProvider };
