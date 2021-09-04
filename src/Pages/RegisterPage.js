import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  AppArtInput,
  ButtonLogin,
} from "../components/styled/styledcomponents";

const RegisterPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" align="center">
        AppArt
      </Typography>
      <div className={classes.root}>
        <Typography variant="h5" color="secondary" align="center">
          Create Account
        </Typography>
        <form className={classes.formregister} align="center">
          <AppArtInput placeholder="Name" className={classes.Name} />
          <AppArtInput placeholder="Surname" className={classes.Surname} />
          <AppArtInput placeholder="Phone" className={classes.phone} />
          <AppArtInput placeholder="Email" className={classes.email} />
          <AppArtInput placeholder="Password" className={classes.password} />
          <ButtonLogin className={classes.buttonregister}>Create</ButtonLogin>
        </form>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "37%",
    maxWidth: "500px",
    marginTop: "40px",
    background: "rgba(0,0,0,0.85)",
    width: "400px",
    height: "550px",
  },
  formregister: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
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
