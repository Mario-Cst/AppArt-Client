import { makeStyles } from "@material-ui/core";
import React from "react";
import { Header } from "../components/Header";
import { ButtonLogin } from "../components/styled/styledcomponents";

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <ButtonLogin>Login</ButtonLogin>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));
