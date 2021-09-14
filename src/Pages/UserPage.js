import {
  Avatar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

import {
  House,
  LocalShipping,
  Person,
  PhoneIphone,
  ChatBubbleOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import WarningIcon from "@material-ui/icons/Warning";
import RoomIcon from "@material-ui/icons/Room";

const UserPage = () => {
  const classes = useStyles();
  const [SelectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <div className={classes.root}>
        <Tabs
          value={SelectedTab}
          onChange={handleChange}
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Home" icon={<House />} />
          <Tab className={classes.tab} label="Usuarios" icon={<Person />} />
          <Tab className={classes.tab} label="Vans" icon={<LocalShipping />} />
          <Tab
            className={classes.tab}
            label="Dispositivos"
            icon={<PhoneIphone />}
          />
          <Tab className={classes.tab} label="Eventos" icon={<WarningIcon />} />
          <Tab className={classes.tab} label="Rutas" icon={<RoomIcon />} />
          <Tab
            className={classes.tab}
            label="Mensajes"
            icon={<ChatBubbleOutlined />}
          />
        </Tabs>
      </div>
      <div className={classes.infouser}>
        <Avatar className={classes.avatar} variant="square" />

        <div className={classes.info2}>
          <Typography className={classes.name} variant="h4">
            {" "}
            Drew Barrymore LA
          </Typography>
          <Typography className={classes.Driver} variant="h5">
            Driver
          </Typography>
          <Typography className={classes.logistic} variant="h6">
            Logistic Enterprise
          </Typography>
          <Typography className={classes.email} variant="h7">
            DrewBarrymore@gmail.com
          </Typography>
          <Typography className={classes.info} variant="h5">
            Otra información <span> Ultimos eventos</span>
          </Typography>

          <Button className={classes.button}>Enviar mensaje</Button>
          <Button className={classes.button}>Editar usuario</Button>
          <div className={classes.contacto}>
            <Typography variant="h6">Teléfono:</Typography>
            <Typography variant="h6">Dirección:</Typography>
            <Typography variant="h6">Población:</Typography>
            <Typography variant="h6">Código Postal:</Typography>
            <Typography variant="h6">Email Personal:</Typography>
            <Typography variant="h6">Fecha de nacimiento:</Typography>
            <Typography variant="h6">D.N.I:</Typography>
            <Typography variant="h6">Género:</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
  tabs: {
    color: "#fff",
  },
  infouser: {
    display: "flex",
  },
  avatar: {
    display: "flex",
    width: "300px",
    height: "270px",
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
  },
  button: {
    display: "flex",
    flexDirection: "column",

    right: "620px",

    width: "150px",
    backgroundColor: "#111",
    color: "#fff",
  },
  info2: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.spacing(60),
    marginTop: theme.spacing(10),
    justifyContent: "space-between",
    gap: "20px",
  },
  info: {
    display: "flex",
    gap: "350px",
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(6),
    borderBottom: "1px solid lightgray",
  },
  contacto: {
    marginRight: "450px",
    marginTop: "350px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
  },
}));

export default UserPage;
