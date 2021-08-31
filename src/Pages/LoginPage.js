import { makeStyles } from "@material-ui/core";
import React from "react";

import Modal from "../components/Modal";

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Modal />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default LoginPage;
