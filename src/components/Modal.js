import { makeStyles, Modal, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { AppArtInput, ButtonLogin } from "./styled/styledcomponents";

const ModalLogin = () => {
  const history = useHistory();
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const openCloseModal = () => {
    setModal(!modal);
  };
  const bodyModal = (
    <div className={classes.root}>
      {" "}
      <Typography variant="h5" color="secondary">
        Login
      </Typography>
      <form className={classes.form}>
        <AppArtInput placeholder="Email" className={classes.email} />
        <AppArtInput placeholder="Password" className={classes.password} />
        <ButtonLogin className={classes.button}>Login</ButtonLogin>
        <ButtonLogin>Cancel</ButtonLogin>
        <Typography variant="subtitle2" color="secondary">
          New to AppArt ? {""}
          <span
            className={classes.signupLink}
            onClick={() => history.push("/register")}
          >
            Sign Up now
          </span>
        </Typography>
      </form>
    </div>
  );
  return (
    <div className={classes.info}>
      <ButtonLogin
        className={classes.openButton}
        onClick={() => openCloseModal()}
      >
        Login
      </ButtonLogin>
      <Modal open={modal} onClose={openCloseModal}>
        {bodyModal}
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    marginTop: "195px",
    paddingRight: "30px",

    marginLeft: "37%",
    maxWidth: "350px",
    width: "35rem",
    height: "29rem",
    background: "rgba(0,0,0,0.70)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  button: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(10),
  },
  openButton: {
    marginLeft: "47%",
    marginTop: theme.spacing(40),
  },
}));
export default ModalLogin;
