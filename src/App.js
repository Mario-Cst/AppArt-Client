import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { Home } from "./Pages/Home";
import { ButtonLogin } from "./components/styled/styledcomponents";

function App() {
  const user = "pepe";
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        <Router>
          {!user ? (
            <ButtonLogin />
          ) : (
            <Switch>
              {/*  <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/checkout">
                <Paypal />
              </Route> */}
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          )}
        </Router>
      }
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
