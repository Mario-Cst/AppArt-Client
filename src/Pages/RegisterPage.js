import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  AppArtInput,
  ButtonLogin,
} from "../components/styled/styledcomponents";

const RegisterPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" color="initial" align="center">
        Create Account
      </Typography>
      <form className={classes.formregister}>
        <AppArtInput placeholder="Name" className={classes.Name} />
        <AppArtInput placeholder="Surname" className={classes.Surname} />
        <AppArtInput placeholder="Phone" className={classes.phone} />
        <AppArtInput placeholder="Email" className={classes.email} />
        <AppArtInput placeholder="Password" className={classes.password} />
        <ButtonLogin className={classes.buttonregister}>Create</ButtonLogin>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    marginTop: "50px",
    background: "rgba(0,0,0,0.65)",
    width: "400px",
    height: "550px",
  },
  formregister: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  email: {
    marginBottom: theme.spacing(4),
  },
  Name: {
    marginBottom: theme.spacing(4),
  },
  Surname: {
    marginBottom: theme.spacing(4),
  },
  phone: {
    marginBottom: theme.spacing(4),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
}));

export default RegisterPage;
