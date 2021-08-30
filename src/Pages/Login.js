import { makeStyles } from "@material-ui/core";
import React from "react";

import { Header } from "../components/Header";
import Modal from "../components/Modal";

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Modal />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Login;
