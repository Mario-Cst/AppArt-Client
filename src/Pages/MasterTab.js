import React from "react";
import { useState } from "react";
import { makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import RoomIcon from "@material-ui/icons/Room";
import {
  ChatBubbleOutlined,
  House,
  LocalShipping,
  Person,
  PhoneIphone,
} from "@material-ui/icons";
import VansPage from "./VansPage";
import UsersPage from "./UsersPage";
import DevicePage from "./DevicesPage";
import EventPage from "./EventPage";
import HomeMainPage from "./HomeMain";

export default function MasterTab() {
  const classes = useStyles();
  const [SelectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <AppBar position="relative" className={classes.root} elevation={0}>
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

        {SelectedTab === 0 && <HomeMainPage />}
        {SelectedTab === 1 && <UsersPage />}
        {SelectedTab === 2 && <VansPage />}
        {SelectedTab === 3 && <DevicePage />}
        {SelectedTab === 4 && <EventPage />}
        {SelectedTab === 5 && <hi>Chat</hi>}
      </AppBar>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
}));
