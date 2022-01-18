import React from "react";
import Slider from "@material-ui/core/Slider";

export default function DiscreteSlider({ currentWeek, setCurrentWeek }) {
  return (
    <div className="slider">
      <b>Vecka: {currentWeek - 1}, 2021</b>

      <Slider
        style={{ color: "rgb(41, 50, 60)" }}
        defaultValue={2}
        valueLabelFormat={(value) => <span>v. {value - 1}</span>}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        /* TODO: 
        Make separate sliders for each year?
        Disable slider for weeks with no data
        */
        min={2}
        max={48}
        onChange={(e, v) => setCurrentWeek(v)}
      />
    </div>
  );
}
