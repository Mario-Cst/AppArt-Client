import React from "react";
import { makeStyles } from "@material-ui/core";

export default function GraphicPreview() {
  const classes = useStyles();
  return <div className={classes.root}>Graphic Preview</div>;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2a9df4",
    height: 295,
    borderRadius: 25,
    paddingRight: theme.spacing(4),
    alignItems: "center",
  },
}));
