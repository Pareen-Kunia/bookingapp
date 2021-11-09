import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/landing_page/landing";
import Reset from "./components/reset_pass/reset";
import "./index.css";
// import App from './App';
import SignUp from "./SignUp";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Reset />, document.getElementById("root"));
