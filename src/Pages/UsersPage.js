import React from "react";
import { useState } from "react";
import { makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";

export default function UsersPage() {
  const classes = useStyles();
  const [SelectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <AppBar position="relative">
        <Tabs
          //orientation="vertical"
          value={SelectedTab}
          onChange={handleChange}
          className={classes.root}
        >
          <Tab label="lista" />
          <Tab label="ultimos eventos" />
          <Tab label="Crear Usuario" />
          <Tab label="Control" />
        </Tabs>
        {SelectedTab === 0 && <h1>Listado de Usuarios</h1>}
        {SelectedTab === 1 && <h1>Ultimos Eventos</h1>}
        {SelectedTab === 2 && <h1>Crear Usuario</h1>}
        {SelectedTab === 3 && <h1>Control</h1>}
      </AppBar>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#DFE6E9",
    color: "black",
  },
  tabs: {
    marginLeft: theme.spacing(6),
    cursor: "pointer",
  },
  tab: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
