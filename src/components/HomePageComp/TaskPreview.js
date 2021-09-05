import React from "react";
import { makeStyles } from "@material-ui/core";

export default function TaskPreview() {
  const classes = useStyles();
  return <div className={classes.root}>Task Preview</div>;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2a9df4",
    height: 200,
    borderRadius: 25,
    marginTop: theme.spacing(2),
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));
