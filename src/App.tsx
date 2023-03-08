import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/header";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

export const App = () => <Header />;
ReactDOM.render(<App />, document.getElementById("app"));
