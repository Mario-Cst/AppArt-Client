import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import {
  ChatBubbleOutlined,
  Help,
  House,
  LocalShipping,
  Person,
  PhoneIphone,
} from "@material-ui/icons";
import GPS from "../images/GPS.png";

export const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="fixed" elevation={0} className={classes.root}>
      <Tabs className={classes.tabs}>
        <img
          src={GPS}
          alt="logo"
          className={classes.logo}
          onClick={() => history.push("/landingpage")}
        />
        <Tab label="Home" icon={<House />} />
        <Tab label="Drivers" icon={<Person />} />
        <Tab label="Vans" icon={<LocalShipping />} />
        <Tab label="Dispositivos" icon={<PhoneIphone />} />
        <Tab label="Eventos" icon={<Help />} />
        <Tab label="Mensajes" icon={<ChatBubbleOutlined />} />
      </Tabs>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
  tabs: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(10),
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  logo: {
    width: "100px",
    marginRight: theme.spacing(4),
  },
}));
