import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import AdminPanel from "./components/AdminPanel";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/landing_page/landing";
import Reset from "./components/reset_pass/reset";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Navbar} />{" "}
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/signup" component={SignUp} /> 
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/admin" component={AdminPanel} />
        <Route exact path="/reset" component={Reset} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
