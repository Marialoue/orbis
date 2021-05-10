import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    width: "100%",
  },
});

export default function DiscreteSlider({ currentWeek, setCurrentWeek }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={2}
        // Some minor label formatting
        valueLabelFormat={(value) => <span>V. {value - 2}</span>}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        // Lets not care about week 52 / 53 of 2020 -
        // Setting min=2 should start us on week 1 of 2021
        min={2}
        max={16}
        onChange={(e, v) => setCurrentWeek(v)}
      />
    </div>
  );
}
