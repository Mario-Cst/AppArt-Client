import { AppBar, makeStyles, Toolbar, Avatar } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

import GPS from "../images/GPS.png";

export const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" elevation={0} className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img
            src={GPS}
            alt="logo"
            className={classes.logo}
            onClick={() => history.push("/")}
          />

          <h1 onClick={() => history.push("/login")}>AppArt</h1>
          <Avatar
            className={classes.avatar}
            variant="circular"
            onClick={() => history.push("/profile")}
          ></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2D3436",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    color: "red",
    cursor: "pointer",
  },
  logo: {
    width: "100px",
  },
}));
