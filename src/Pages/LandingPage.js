import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ModalLogin from "../components/Modal";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" align="center">
        AppArt
      </Typography>
      <ModalLogin />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default LandingPage;
