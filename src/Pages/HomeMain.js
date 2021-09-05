import React from "react";
import { makeStyles, AppBar, Tabs, Tab, Grid } from "@material-ui/core";
import UsersPreview from "../components/HomePageComp/UsersPreview";
import JourneyPreview from "../components/HomePageComp/JourneyPreview";
import TaskPreview from "../components/HomePageComp/TaskPreview";
import EventPreview from "../components/HomePageComp/EventPreview";
import GraphicPreview from "../components/HomePageComp/GraficPrewiew";
import ChatPreview from "../components/HomePageComp/ChatPreview";

export default function HomeMainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={12}>
          <h1>Home</h1>
        </Grid>
        <Grid xs={4}>
          <UsersPreview className={classes.usersPreview} />
        </Grid>
        <Grid xs={4}>
          <JourneyPreview className={classes.JourneyPreview} />
          <TaskPreview />
          <EventPreview />
        </Grid>
        <Grid xs={4}>
          <GraphicPreview />
          <ChatPreview />
        </Grid>
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#7f7f7f",
    padding: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  usersPreview: {
    marginLeft: theme.spacing(6),
    cursor: "pointer",
  },
  tab: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
