import React from "react";
import { makeStyles } from "@material-ui/core";

export default function UsersPreview() {
  const classes = useStyles();
  return <div className={classes.root}>User Preview</div>;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2a9df4",
    height: 515,
    borderRadius: 25,
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));
