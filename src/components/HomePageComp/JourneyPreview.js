import React from "react";
import { makeStyles } from "@material-ui/core";

export default function JourneyPreview() {
  const classes = useStyles();
  return <div className={classes.root}>Contro horario Feature</div>;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2a9df4",
    height: 80,
    borderRadius: 25,
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));
