import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import LoginPage from "./Pages/LoginPage";

import Profile from "./Pages/Profile";

import RegisterPage from "./Pages/RegisterPage";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";

function App() {
  const user = null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        <Router>
          <Switch>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>

            <Route exact path="/landingpage">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
