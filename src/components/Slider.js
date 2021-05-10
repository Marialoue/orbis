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

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider({ currentWeek, setCurrentWeek }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={2}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={16}
        onChange={(e, v) => setCurrentWeek(v)}
      />
    </div>
  );
}
