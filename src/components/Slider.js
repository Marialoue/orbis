import React from "react";
import Slider from "@material-ui/core/Slider";

export default function DiscreteSlider({ currentWeek, setCurrentWeek }) {
  return (
    <div className="slider">
      <b>Vecka: {currentWeek - 1}, 2021</b>

      <Slider
        style={{ color: "rgb(41, 50, 60)" }}
        defaultValue={2}
        // Some minor label formatting
        valueLabelFormat={(value) => <span>v. {value - 1}</span>}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        // Lets not care about week 52 / 53 of 2020 -
        // Setting min=2 should start us on week 1 of 2021
        min={2}
        max={42}
        onChange={(e, v) => setCurrentWeek(v)}
      />
    </div>
  );
}
