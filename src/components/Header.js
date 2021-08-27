import { AppBar, Avatar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" elevation={0} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <h1>Logo</h1>
        <Avatar variant="circular"></Avatar>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
