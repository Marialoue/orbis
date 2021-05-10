import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    borderRadius: "10px",
    backgroundColor: "rgba(83, 128, 172, 0.211)",
    boxShadow: "0px 5px 5px 0px rgba(74, 74, 78, 0.642)",
    height: "30px",
    marginTop: "40px",
    width: "90%",
    marginLeft: "60px",
    zIndex: 99999,
  },
});

export default function DiscreteSlider({ currentWeek, setCurrentWeek }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={2}
        // Some minor label formatting
        valueLabelFormat={(value) => <span>V. {value - 1}</span>}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
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
