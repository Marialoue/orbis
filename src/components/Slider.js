import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";


export default function DiscreteSlider({ currentWeek, setCurrentWeek }) {
  // const classes = useStyles();

  return (
    <div className="slider">
      <Slider
        defaultValue={2}
        // Some minor label formatting
        valueLabelFormat={(value) => <span>V. {value - 1}</span>}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        
        // Lets not care about week 52 / 53 of 2020 -
        // Setting min=2 should start us on week 1 of 2021
        min={2}
        max={17}
        onChange={(e, v) => setCurrentWeek(v)}
      />
      <span style={{ fontSize: "30px", marginTop: "5px" }}>
        <b>Vecka: {currentWeek - 1}, 2021</b>
      </span>
    </div>
  );
}
