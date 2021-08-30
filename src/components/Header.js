import { AppBar, Avatar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import GPS from "../images/GPS.png";

export const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky" elevation={0} className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={GPS} alt="logo" className={classes.logo} />

          <h1>AppArt</h1>
          <Avatar variant="circular"></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    color: "red",
  },
  logo: {
    width: "100px",
  },
}));
